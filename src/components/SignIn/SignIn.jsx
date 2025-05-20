import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const SignIn = () => {
    const { userSignInWithEmailPass } = use(AuthContext)

    const handleFormSubmitBtn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userSignInWithEmailPass(email, password)
        .then(result=>{
            console.log(result);
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    const handleSignInWithGoole = () => {
        
    }
    return (
        <div className='sm:p-4 flex justify-center items-center bg-gradient-to-t from-[#D0E5E0] to-white'>

        <div className='sm:p-4 px-5 sm:px-18 py-4 mt-8  flex justify-center items-center bg-white shadow-2xl rounded-2xl ' >
            {/* <div className='hidden lg:block' >
                <img className='w-[700px]' src="https://i.ibb.co.com/LXhwc5zt/sign-in.png" alt="Imdbb server down" />
            </div> */}
            <div className="flex flex-col justify-center items-center w-fit  p-8 bg-[#D0E5E0] rounded-2xl sm:my-22">
                <div>
                    <p className='text-lg sm:text-xl font-semibold text-[#1C2B4A]'>User Sign In</p>
                </div>
              <form onSubmit={handleFormSubmitBtn}>
              {/* email fild */}
                  <div>
                      <p className='text-sm sm:text-base '>Email</p>
                  <div className="join ">
        <div className=" sm:w-[320px]">
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
            <input name='email' type="email" placeholder="mail@site.com" />
            </label>
           
        </div>
        </div>  
                  </div>    

              <br />

              {/* password fild */}
                  <div>
                      <p className='text-sm sm:text-base '>Password</p>
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
            placeholder="Password"
            minLength="8"
            
        />
        </label>
        
            </div> 
                  </div>  
                    <div className='pt-3 w-fit'>
                        <Link><p className='hover:text-blue-700 text-sm sm:text-base w-fit '>Forgot password ?</p></Link>
              </div>
              <div className="pt-4 ">
                  <button className="btn hover:bg-[#7BA7E3] hover:text-white  w-full">Sign In</button>
              </div>
              </form>
              
              <div className="pt-3">
                  <Link to='/Register'><p className='text-sm sm:text-base '>New to this site ? <span className="text-blue-700">Register</span></p></Link>
              </div>
              <div className="pt-4">
                  <p className="text-center p-2">or</p>
                <button onClick={handleSignInWithGoole} className="btn hover:border hover:border-blue-400 sm:w-[320px] bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Sign In with Google
                </button>
              </div>
      </div>
    </div>
        </div>
    );
};

export default SignIn;