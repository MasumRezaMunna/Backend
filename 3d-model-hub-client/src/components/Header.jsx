import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import toast from 'react-hot-toast';

const Header = () => {
  const { user, logout } = useAuth();
  const [isDark, setIsDark] = useState(false);

  // Handle theme toggle
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setIsDark(currentTheme === 'dark');
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setIsDark(e.target.checked);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navLinkClass = ({ isActive }) => isActive ? 'text-primary font-bold' : '';

  const navLinks = (
    <>
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      <li><NavLink to="/models" className={navLinkClass}>Browse Models</NavLink></li>
      {user && <li><NavLink to="/add-model" className={navLinkClass}>Add Model</NavLink></li>}
    </>
  );

  return (
    <header className="navbar bg-base-100/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 8-3-3-3 3"/><path d="m11 2-2 2-2-2"/><path d="m21 16 3 3-3 3"/><path d="m11 22 2-2 2 2"/><path d="m8 2-3 3 3 3"/><path d="M2 11h6"/><path d="M2 11v2H2"/><path d="m8 22 3-3-3-3"/><path d="M14 11h6"/><path d="M22 11v2h-6"/><path d="m11.1 6.1 2.8 2.8"/><path d="m6.1 11.1 2.8 2.8"/><path d="m11.1 17.9 2.8-2.8"/><path d="m17.9 11.1-2.8-2.8"/></svg>
          3D Model Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input type="checkbox" checked={isDark} onChange={toggleTheme} />
          <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-1.41,1.41L1,16.83l1.41-1.41L5.64,17ZM5,12a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V13a1,1,0,0,0-1-1H5ZM18,12a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V13a1,1,0,0,0-1-1H18ZM11,18a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1H11ZM12,6a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H12ZM18.36,17l1.41,1.41L21.17,17l-1.41-1.41L18.36,17ZM12,0a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1H12ZM6.34,6.34,4.93,4.93,3.51,6.34,4.93,7.76,6.34,6.34ZM19.07,4.93,17.66,6.34l1.41,1.41,1.41-1.41L19.07,4.93ZM1,12a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V13a1,1,0,0,0-1-1H1Z"/></svg>
          <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,13.05,13.05,0,0,1-1.93-.41a1,1,0,0,0-1.05.14,13.05,13.05,0,0,1-1.93.41,1,1,0,0,0-1.05.14,13.05,13.05,0,0,1-1.93.41,1,1,0,0,0-1.05.14,13.05,13.05,0,0,1-1.93.41,1,1,0,0,0-1.05.14,13.05,13.05,0,0,1-1.93.41,1,1,0,0,0-1.05.14,1,1,0,0,0,0,1.93A13.05,13.05,0,0,1,7.21,17a1,1,0,0,0,.14,1.05,13.05,13.05,0,0,1,.41,1.93,1,1,0,0,0,1.05.14,13.05,13.05,0,0,1,1.93.41,1,1,0,0,0,1.05-.14,13.05,13.05,0,0,1,1.93-.41,1,1,0,0,0,1.05-.14,13.05,13.05,0,0,1,1.93-.41,1,1,0,0,0,1.05-.14,13.05,13.05,0,0,1,1.93-.41,1,1,0,0,0,1.05-.14,1,1,0,0,0,.14-1.05A13.05,13.05,0,0,1,22.29,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.06,8.06,0,0,1,7.05,14.6,8.06,8.06,0,0,1,12.14,9.5a8.06,8.06,0,0,1,5.09,5.09A8.06,8.06,0,0,1,12.14,19.69Z"/></svg>
        </label>
        
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || 'https://placehold.co/100x100/222/fff?text=?'} alt={user.displayName} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="p-2 font-semibold">{user.displayName}</li>
              <li><Link to="/my-models">My Models</Link></li>
              <li><Link to="/my-downloads">My Downloads</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;