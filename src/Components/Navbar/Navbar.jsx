import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';

const DropDownLinks = [
  {
    name: 'Our Services',
    links: '/#services',
  },
  {
    name: 'Top Brand',
    links: '/#mobile_brand',
  },
  {
    name: 'Location',
    links: '/#Location',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container  py-[2px]">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Mobile no. +91 123545244</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div>
              <Link to="/">
                <img src="/logo.png" alt="logo" className="h-16" />
              </Link>
            </div>
            {/* Navbar section */}
            <div className="hidden sm:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/blog"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown section */}
                <li className="group py-4 relative cursor-pointer">
                  <div className="flex dropdown  items-center">
                    <span>Quick Links</span>
                    <span>
                      <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-5 z-[999] hidden group-hover:block shadow-2xl text-black w-[150px] bg-orange-100/40 p-2">
                    <ul>
                      {DropDownLinks.map(data => {
                        return (
                          <li key={data.name}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.links}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* book Now button */}
            <div>
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary duration-600 text-white py-2 px-4 rounded-full "
                // onClick={handleOrderPopup}
              >
                Order Now
              </button>
              {/* Mobile responsive menu */}
              <div>
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown section */}
    </>
  );
};
export default Navbar;
