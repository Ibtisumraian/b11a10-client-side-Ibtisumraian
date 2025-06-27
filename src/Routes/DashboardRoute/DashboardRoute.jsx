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
      <div className="lg:hidden fixed top-4 left-4 z-50">
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
      </div>

      {/* Main Content (scrollable) */}
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardRoute;
