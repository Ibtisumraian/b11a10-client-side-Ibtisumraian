import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        
        <NavLink><button className='btn'>Home</button></NavLink>
        <NavLink><button className='btn'>All Recipes</button></NavLink>
        <NavLink><button className='btn'>Add Recipes</button></NavLink>
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
    <button className='btn'>Sign In</button>
    <button className='btn'>Register</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;
