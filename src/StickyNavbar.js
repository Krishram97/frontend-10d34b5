import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import logo from './Assets/img/AA&Co logo.png'

export function StickyNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => { 
    setIsDropdownOpen(false);
  };
  return (
    <Navbar className="bg-blue-500 p-1">
      <div className="container mx-auto flex justify-between items-center px-10">
        
          <div class="mx-2 my-1 flex items-center text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0" >
            <img
              src={logo}
              width='50'
              height="50"
              alt="Logo"
              className="d-inline-block align-top"
          />
          <Typography
            className="text-2xl text-white font-semibold cursor-pointer"
          >
            Amigos creAtIons & Co
          </Typography>
           </div> 
        
        <ul className="flex items-center space-x-10">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition duration-400">
              Home
            </Link>
          </li>
          <li className='dropdown' style={{
            position: 'relative',
          }}>
            <li className="dropdown-button text-white hover:text-gray-300 transition duration-400 cursor-pointer" onClick={handleDropdownToggle}>
              Courses
            </li>
            {isDropdownOpen && (
              <ul className='dropdown-content' onBlur={closeDropdown} style={{
                position: 'absolute',
                backgroundAttachment: true,
                backgroundColor: "blueviolet"
              }}>
                <li>
                  <a href={"./Courses/Graphics"} className="block px-4 py-4 text-sm text-bg-black hover-white">Graphics</a>
                </li>
                <li>
                  <a href={"./Courses/Skills"} className="block px-4 py-4 text-sm text-bg-black hover-white">Skills</a>
                </li>
                <li>
                  <a href={"./Courses/Arts&tools"} className="block px-4 py-4 text-sm text-bg-black hover-white">Art Works</a>
                </li>
                <li>
                  <a href="#Adobe-Creative-Suites" className="block px-10 py-4 text-sm text-bg-black hover-white">Adobe Creative suite</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/Login" className="text-white hover:text-gray-300 transition duration-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="text-white hover:text-gray-300 transition duration-400">
              Contact-Us
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
