import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Navbar = () => {
  const { user } = use(AuthContext)

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      
    })
      .catch((error => {
      console.log(error);
      
    }))
  }
    const links = <>
        
        <NavLink to='/'><button className='btn'>Home</button></NavLink>
        <NavLink><button className='btn'>All Recipes</button></NavLink>
        <NavLink to='/AddRecipes'><button className='btn'>Add Recipes</button></NavLink>
        <NavLink><button className='btn'>My Recipes</button></NavLink>
        
    </>
    return (
        <div className='bg-[#005A52]'>
            <div className="navbar w-9/12 mx-auto  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <div>
        
        <img className='w-[100px] hidden lg:block' src="https://res.cloudinary.com/dd4np04jl/image/upload/v1747668593/logo_fz0exp.png" alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-3 px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
    
            {
              user ? <div className="dropdown dropdown-left">
              <div tabIndex={0} role="button" className=" m-1">
                
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 sm:w-52 p-2 shadow-sm">
                    <li className='font-semibold'>{ user.displayName}</li>
                    {/* <li>Balance : {blance} BDT</li> */}
                    <button onClick={handleSignOut} className='btn btn-sm text-[#1C2B4A] hover:bg-[#6A9AD9] hover:text-white'>Sign Out</button>
                  </ul>
          </div> : <>
                  <NavLink to='/Signin'><button className='btn'>Sign In</button></NavLink>
                  <NavLink to='/Signup'><button className='btn'>Sign Up</button></NavLink>
              </>
            }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;
