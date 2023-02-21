import React from 'react';
import Logo from './../assest/Logo-main.png';

function Footer() {
  return (

    <div className='w-full bg-white mt-5 pt-20'>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 font-medium'>

      <div className='w-full flex flex-col p-2'>
        <div>
        <img className='max-w-[100px] ' src={Logo} alt='image'/>
         <p className='py-4'>An autonomous global healthcare technology corporation that<br/>
          intensely converges on developing data-driven analytics,<br/>
           accelerates innovation and advances healthcare transformation.</p>
         <div className='flex justify-between md:w-[75%] my-6'>
             {/* <FaFacebookSquare size={30} />
             <FaInstagram size={30} />
             <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} /> */}
         </div>
       </div>
          </div>

          <div className='w-full  flex flex-col p-2 '>
           <div>
         <h6 className=' text-xl font-bold text-blue-900'>Contact Us</h6>
         <hr className='w-10 h-2 bg-blue-400 rounded mt-4 mb-4'/>
         <h4 className='font-bold text-blue-900 pb-1 mt-6'>Head Office:</h4>
         <p className='mb-4 '>312, Airport Building, Port Saeed Street,<br/> Deira, Dubai, United Arab Emirates</p>
         <main className='pb-2'>+971 (04) 2896 454</main>
          <p>sales@nanohealthsuite.com</p>
          </div>
          </div>

          <div className='w-full flex flex-col p-2'>

          <div>
         <h6 className='text-xl font-bold text-blue-900'>Quick Links</h6>
         <hr className='w-10 h-2  bg-blue-400 rounded mt-4 mb-4'/>
         <ul className='mt-5'>
             <li className='py-2 text-sm'>About NANO Health Suite</li>
             <li className='py-2 text-sm'>Terms & Conditions</li>
             <li className='py-2 text-sm'>Privacy Policy</li>
             <li className='py-2 text-sm'>Support</li>
         </ul>
     </div>
          </div>

        </div>

        <div className='w-full text-center p-6'>
        <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
        </div>

        <div className='w-full text-center font-medium bg-[#1D829A] text-white p-4'>
        <span>© Copyright 2021 Nano Health Suite. All Rights Reserved.</span>
        </div>

      </div>
  )
}

export default Footer
