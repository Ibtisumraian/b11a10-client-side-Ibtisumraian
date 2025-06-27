import { signOut } from 'firebase/auth';
import React from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { Link, NavLink, Outlet } from 'react-router';
import { auth } from '../../components/firebase/firebase.init';
import { Bounce, toast } from 'react-toastify';
import { GoHome } from 'react-icons/go';
import { MdOutlineAddComment, MdOutlineDashboard } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { PiCookingPotBold } from 'react-icons/pi';
import { IoLogOutOutline } from 'react-icons/io5';

const DashboardRoute = () => {

    const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 sticky top-0 h-screen hidden lg:flex flex-col p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="menu space-y-2 flex flex-col gap-3 text-lg">
          <Link to='/'><h1 className='flex items-center gap-3'><GoHome />Home</h1></Link>
          <Link to='/DashboardRoute'><h1 className='flex items-center gap-3'><MdOutlineDashboard />Dashboard Home</h1></Link>
          <Link to='UserProfile'><h1 className='flex items-center gap-3'><FaRegUser />User Profile</h1></Link>
          <Link to='MyRecipes'><h1 className='flex items-center gap-3'><PiCookingPotBold />My Recipes</h1></Link>
          <Link to='AddRecipes'><h1 className='flex items-center gap-3'><MdOutlineAddComment />Add Recipes</h1></Link>
          <h1 onClick={handleSignOut} className='mt-16 flex items-center gap-3 cursor-pointer w-fit'><IoLogOutOutline />Logout</h1>
          
          {/* <li><a>Settings</a></li> */}
          
        </ul>
      </aside>
      
      {/* Main Content (scrollable) */}
      <main className="flex-1 overflow-y-auto p-4">

        <div className='block lg:hidden'>
        <div className="drawer">
              <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                  <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <div className="mx-2 flex-1 px-2">Dashboard</div>
                  <div className="hidden flex-none lg:block">
                    <ul className="menu menu-horizontal">
                      {/* Navbar menu content here */}
                      {/* <li><a>Navbar Item 1</a></li>
                      <li><a>Navbar Item 2</a></li> */}
                    </ul>
                  </div>
                </div>
                {/* Page content here */}
                {/* Content */}
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-60 p-4 flex flex-col gap-4">
                  {/* Sidebar content here */}
                  <Link to='/'><h1 className='flex items-center gap-3'><GoHome />Home</h1></Link>
                  <Link to='/DashboardRoute'><h1 className='flex items-center gap-3'><MdOutlineDashboard />Dashboard Home</h1></Link>
                  <Link to='UserProfile'><h1 className='flex items-center gap-3'><FaRegUser />User Profile</h1></Link>
                  <Link to='MyRecipes'><h1 className='flex items-center gap-3'><PiCookingPotBold />My Recipes</h1></Link>
                  <Link to='AddRecipes'><h1 className='flex items-center gap-3'><MdOutlineAddComment />Add Recipes</h1></Link>
                  <h1 onClick={handleSignOut} className='mt-16 flex items-center gap-3 cursor-pointer w-fit'><IoLogOutOutline />Logout</h1>
                </ul>
              </div>
            </div>
        </div>
        

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardRoute;
