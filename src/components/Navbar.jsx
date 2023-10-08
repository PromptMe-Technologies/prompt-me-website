import { useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="  bg-screen-white w-full flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src={logo} alt="" />
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden gap-3 items-center mr-10">
        <button className="font-poppins w-[174px] h-[49px] border-solid border-[3px] rounded-[7px] border-lemon-green shadow-md">
          Sign-in
        </button>
        <button className="font-poppins w-[174px] h-[49px] text-white rounded-[7px] bg-[#1B1B1B] shadow-xl">
          Get Started
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <div className="list-none flex justify-end items-start flex-1 flex-col">
            <button className="w-[174px] h-[49px]">Sign-in</button>
            <button className="w-[174px] h-[49px] text-white rounded-[3px] bg-[#1B1B1B]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
