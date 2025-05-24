import React, { use, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';

const SignUp = () => {
    useEffect(() => {
             window.scrollTo(0, 0)        
         }, [])
    const { user, userSignInWithGoogle, userSignUpWithEmailPass, theme } = use(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(user);
    

    const handleFormSubmitBtn = (e) => {
        e.preventDefault()
        // const form = e.target
        // const formData = new FormData(form)
        // const user = Object.fromEntries(formData.entries());
        // console.log(user);
        const email = e.target.email.value
        const password = e.target.password.value
        const username = e.target.name.value
        const userPhoto = e.target.photo.value
        userSignUpWithEmailPass(email, password)
        .then(  (result)=>{
            console.log(result);
            updateProfile(result.user, {
            displayName: username,
            photoURL: userPhoto,
            });
            toast.success('Signed up successfully!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        });
            navigate(location?.state || '/')
        })
        .catch(error=>{
            console.log(error);
            if (error) {
                toast.error('Something went wrong while signing up. Please try again.!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    })
            }
        })
        
    }

    const handleSignInWithGoogle = () => {
        userSignInWithGoogle()
        .then(result=>{
            console.log(result);
            toast.success('Signed in successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            navigate(location?.state || '/')
        })
        .catch(error => {
            console.log(error);
            if (error) {
                toast.error('There was a problem signing in with Google!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    })
            }
        })
    }
    return (
        <div className={`p2 sm:p-6 flex justify-center items-center ${theme === "dark" ? "bg-gradient-to-t from-[#0f1b28] to-white" : "bg-gradient-to-t from-[#D0E5E0] to-white"}`}>
      
      <div className={`flex justify-center items-center px-5 sm:px-18 mt-2 sm:py-4 rounded-2xl shadow-2xl ${theme === "dark" ? "bg-[#0f1b28]" : "bg-white"}`}>

          <div className={`flex flex-col justify-center items-center w-fit  p-8  rounded-2xl my-10 ${theme === "dark" ? "bg-gray-800" : "bg-[#D0E5E0]"}`}>
                <div>
                    <p className='text-lg sm:text-xl font-semibold'>Create an account</p>
                </div>
              <form onSubmit={handleFormSubmitBtn}>
                   {/* name fild */}
              
                  <div className="pb-5">
                      <p className="text-sm sm:text-base ">Name</p>
              <input required name="name" type="text" className="input sm:w-[320px]" placeholder="Name"  />
             </div>
              
              {/* photo url */}
            <div>
                <p className="text-sm sm:text-base ">Photo URL</p>          
                  <label className="input validator">
                      
                      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          fill="none"
                          stroke="currentColor"
                          >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </g>
                      </svg>
                                
                      <input
                          name="photo"
                          type="url"                         
                          placeholder="https://"         
                          title="Must be valid URL"
                          required
                      />
                      </label>
                        <p className="validator-hint mb-2">Must be valid URL</p>   
            </div> 

              {/* email fild */}
                  <div>
                      <p className="text-sm sm:text-base ">Email</p>
                  <div className="join ">
        <div className="sm:w-[320px]">
            <label className="input validator join-item">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
            </svg>
            <input required name='email' type="email" placeholder="mail@site.com"  />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        </div>  
                  </div>    

              <br />

              {/* password fild */}
                  <div>
                      <p className="text-sm sm:text-base ">Password</p>
                  <div className="">
                  <label className="input validator ">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
            >
            <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
            ></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
        </svg>
        <input
            name='password'
            type="password"
            required
            placeholder="Password"
            minLength="8"
            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
            title="Password must be at least 6 characters and include both uppercase and lowercase letters."
        />
        </label>
        <p className="validator-hint hidden">
        Password must be at least 6 characters, including
         <br />At least one lowercase letter <br />At least one uppercase letter
              </p>   
            </div> 
                  </div>  
              
              <div className="pt-8 ">
                  <button className="btn   w-full">Sign Up</button>
              </div>
              </form>
              
              <div className="pt-3">
                  <Link to='/Signin'><p className="text-sm sm:text-base ">Already have an account? <span className="text-blue-700">Sign In</span></p></Link>
              </div>
              <div className="pt-4">
                  <p className="text-center p-2">or</p>
                <button onClick={handleSignInWithGoogle} className={`btn  sm:w-[320px] text-sm bg-white text-black border-[#e5e5e5] ${theme === "dark" ? "hover:border-2 hover:border-[#56c9c1]" : "hover:border-2 hover:border[#D0E5E0]"}`}>
                <svg  aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Sign In with Google
                </button>
              </div>
      </div>
      {/* <div className="hidden lg:block">
        <img className="w-[700px]" src="https://i.ibb.co.com/2YF6ZML7/sign-up.png" alt="Imgbb server down" />
      </div> */}
      </div>
    </div>
    );
};

export default SignUp;