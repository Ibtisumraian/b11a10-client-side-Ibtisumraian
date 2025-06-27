import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

const DashboardRoute = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 sticky top-0 h-screen hidden lg:flex flex-col p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="menu space-y-2">
          <Link to='/'><li>Home</li></Link>
          <Link to='/DashboardRoute'><li>Dashboard Home</li></Link>
          <Link to='MyRecipes'><li>My Recipes</li></Link>
          <Link to='AddRecipes'><li>Add Recipes</li></Link>
          <Link to='/gg'><li>Logout</li></Link>
          
          {/* <li><a>Settings</a></li> */}
          
        </ul>
      </aside>

      {/* Drawer for mobile */}
      {/* <div className="lg:hidden fixed top-4 left-4 z-50">
        <label htmlFor="drawer-toggle" className="btn btn-primary">☰</label>
      </div>
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle hidden" />
      <div className="drawer-side lg:hidden fixed z-40">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-200 min-h-full space-y-2">
          <li><a>Dashboard Home</a></li>
          <li><a>My Recipes</a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div> */}
      

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
                <ul className="menu bg-base-200 min-h-full w-80 p-4 flex flex-col gap-4">
                  {/* Sidebar content here */}
                  <Link to='/'><li>Home</li></Link>
                  <Link to='/DashboardRoute'><li>Dashboard Home</li></Link>
                  <Link to='MyRecipes'><li>My Recipes</li></Link>
                  <Link to='AddRecipes'><li>Add Recipes</li></Link>
                  <Link to='/gg'><li>Logout</li></Link>
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
