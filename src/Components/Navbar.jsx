import React, { useState } from 'react';
import Logo from '../assest/Logo-main.png';
import { AiTwotonePhone, AiOutlineMail,AiOutlineHistory } from 'react-icons/ai';
 import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <div className=' flex items-center  max-w-[1240px] h-[110px] mx-auto px-4 text-black'>
    <img className='w-[166px] ml-[372] h-[81px] ' src={Logo} alt='image'/>
    <ul className='hidden md:flex ml-[198px]'>
      <li className='p-4'>
        <main className='font-bold flex'><AiTwotonePhone size={20} className='mr-1 text-[#00A4C5]'/>Call</main>
      <span>+971 (04) 2896 454</span>
      </li>

      <li className='p-4'>
        <main className='font-bold flex'><AiOutlineMail size={20} className='mr-1 text-[#00A4C5]'/>Connect With Us</main>
      <span>sales@nanohealthsuite.com</span>
      </li>

      <li className='p-4'>
      <main className='font-bold flex'><AiOutlineHistory size={20} className='mr-1 text-[#00A4C5]'/>Sat-Thv</main>
    <span>07:00 - 22:00</span>
    </li>
      <li className='p-4'>
        <button className='text-center bg-[#00A4C5] ml-10 mt-1 p-2 text-white'>Contact US</button>
        </li>
    </ul>
    <div onClick={handleNav} className='block md:hidden '>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    </div>
    <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    <img className='w-[166px] ml-[372] h-[81px] ' src={Logo} alt='image'/>
        <li className='p-4 border-b border-gray-600'>Call
        <span>+971 (04) 76788909</span></li>
        <li className='p-4 border-b border-gray-600'>Connect With Us
        <span>sales@nkklkjk.com</span></li>
        <li className='p-4 border-b border-gray-600'>Sat-Thv
    <span>07:00 - 22:00</span></li>
        <li className='p-4'>  <button className='text-center bg-[#00A4C5] ml-10 mt-1 p-2 text-white rounded-md  px-6 py-3'>Contact US</button></li>
    </ul>
  </div>
  )
}

export default Navbar
