import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import './nav.css'
import { Bounce, toast } from 'react-toastify';
import { MdSunny } from 'react-icons/md';
import { PiMoonStarsFill } from 'react-icons/pi';
const Navbar = () => {
  const { user, theme, setTheme } = use(AuthContext)
// setTheme
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      toast.success('Sign Out Successful!', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
      });
    })
      .catch((error => {
      console.log(error);
      
    }))
  }

    const handleThemeToggle = (td) => {
    // const isDark = e.target.checked;
    // const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', td);
      localStorage.setItem('theme', td);
      const th = localStorage.getItem("theme")
      console.log(th);
      setTheme(th)
  };
console.log(theme);

    const links = <>
        
        <NavLink className="btn" to='/'>Home</NavLink>
        <NavLink className="btn" to='/AllRecipes'>All Recipes</NavLink>
        <NavLink className="btn" to='/AddRecipes'>Add Recipes</NavLink>
        <NavLink className="btn" to='/MyRecipes'>My Recipes</NavLink>
    </>
    return (
      <div className={` ${theme == "dark" ? "bg-gray-800" : "bg-[#005A52]"}`}>
            <div className="navbar w-11/12 mx-auto  ">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-2">
                    {links}
                    </ul>
                  </div>
                  <div>
                      
                      <img className='w-[100px] hidden lg:block' src={`${theme === "dark" ? "https://res.cloudinary.com/dd4np04jl/image/upload/v1747928067/Smiling_Cookie_Recipe_Book_Logo-removebg-preview_rbrcnh.png" : "https://res.cloudinary.com/dd4np04jl/image/upload/v1747668593/logo_fz0exp.png"}`} alt="" />
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal flex gap-3 px-1">
                  {links}
                  </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                  
                  <div className="dropdown dropdown-bottom sm:dropdown-left bg-none">
                  <div tabIndex={0} role="button" className="btn btn-sm md:btn-md md:text-xl "> { theme === "dark" ? <PiMoonStarsFill /> : <MdSunny />}</div>
                    <ul tabIndex={0} className="dropdown-content menu gap-1 rounded-box z-1 w-fit md:w-56  ">
                      <li onClick={()=>handleThemeToggle("light")} className='bg-white text-black w-[100px] md:w-full'><a>Light</a></li>
                      <li onClick={()=>handleThemeToggle("dark")} className='bg-gray-400 w-[100px] md:w-full'><a>Dark</a></li>
                    </ul>
                  </div>
                  
                 
            {
              user ? <div className='flex gap-2'>
                
                <div className="dropdown dropdown-left">
              <div tabIndex={0} role="button" className=" m-1">
                
                  <div className="avatar">
                    <div className="w-9 md:w-16 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 sm:w-52 p-2 shadow-sm">
                    <li className='font-semibold my-2'>{ user.displayName}</li>
                    {/* <li>Balance : {blance} BDT</li> */}
                    <button onClick={handleSignOut} className={`btn btn-sm text-[#1C2B4A] hover:bg-[#005A52]  hover:text-white ${theme === "dark" ? "border border-[#56c9c1] text-[#56c9c1]" : ""}`}>Sign Out</button>
                  </ul>
          </div> 
              </div> : <>
                  <NavLink className="btn btn-sm md:btn-md " to='/Signin'>Sign In</NavLink>
                  <NavLink className="btn btn-sm md:btn-md " to='/Signup'>Sign Up</NavLink>
              </>
            }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;
