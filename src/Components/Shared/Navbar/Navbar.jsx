import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const navItems = [
  { route: 'Home', pathname: '/' },
  { route: 'About Us', pathname: '/about' },
  { route: 'All Foods', pathname: '/all-foods' },
  { route: 'Gallery', pathname: '/gallery' },
  { route: 'My Profile', pathname: '/my-profile' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-secondary to-tertiary text-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 cursor-pointer">
                <Link to="/">
                  <h2 className='text-2xl text-white'>
                    <strong>R</strong>estaurant
                  </h2>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-7">
                {navItems.map((item) => (
                  <NavLink
                    key={item.pathname}
                    to={item.pathname}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white text-xl underline"
                        : "hover:text-white text-xl hover:underline"
                    }
                  >
                    {item.route}
                  </NavLink>
                ))}
                <Link to="/sign-up">
                  <button className="relative text-xl bg-secondary text-white py-1 px-8 rounded-3xl overflow-hidden group">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Login</span>
                    </span>
                    <div className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                  </button>
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={handleDrawerToggle}
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          direction="right"
          className="bg-gradient-to-r from-secondary to-tertiary text-white"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={handleDrawerToggle}
                className="bg-secondary/80 text-white p-2 rounded-md"
              >
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col mt-3 divide-y">
              {navItems.map((item) => (
                <Link
                  key={item.pathname}
                  to={item.pathname}
                  className="mt-2 px-3 py-2 text-black text-base font-medium"
                  onClick={handleDrawerToggle}
                >
                  {item.route}
                </Link>
              ))}
              <div className="divide-y mb-4"></div>
              <Link to="/sign-up">
                <button className="relative text-xl bg-secondary text-white py-2 px-8 text-center rounded-full overflow-hidden group">
                  <span className='z-10 relative'>Login</span>
                  <div className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 origin-center"></div>
                </button>
              </Link>
            </div>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
