import React from 'react';
import Icon1 from './../assest/About/icon1.png';
import Icon2 from './../assest/About/icon2.png';
import Icon3 from './../assest/About/icon3.png';
import Icon4 from './../assest/About/icon4.png';
import ImgAbout from './../assest/About/img-about.png';

function About() {
  return (
    <div className='mt-10'>
    <div className='text-center'>
    <h1 className=' font-bold text-3xl pt-12 text-blue-900 '>About the Nano Healt</h1>
    <hr className='w-20 h-2 mx-auto bg-blue-400 rounded mt-4 mb-4'/>
    <span >Nano Health is devising solutions to equip better and innovative, unified healthcare that can help<br/>
         healthcare providers achieve better care by empowering people to make better decisions.</span>
         </div>

    <div className='w-full py-[10rem]  bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
        
          <div className='w-full shadow-xl  flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Icon1}  alt="/" />
              <h2 className='text-2xl font-bold text-center py-2 text-blue-400'>20 Million+</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>Insurance Claims<br/> Processesd</p>
              </div>
          </div>
          
          <div className='w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Icon2}  alt="/" />
              <h2 className='text-2xl font-bold text-center py-2 text-blue-400'>5 Million+</h2>
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'>Client and Patient<br/>Relationships</p>
              </div>
          </div>

          <div className='w-full shadow-xl  flex flex-col p-2  my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Icon3}  alt="/" />
              <h2 className='text-2xl font-bold text-center py-2 text-blue-400'>30000+</h2>
            
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'>Business Clients<br/> Worked With</p>
                  
              </div>
          </div>

          <div className='w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Icon4}  alt="/" />
              <h2 className='text-2xl font-bold text-center py-2 text-blue-400'>100+</h2>
            
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'>Years of Collective <br/> Work Experience</p>
              </div>
          </div>
      </div>
    </div>


      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>

      <div className='w-full flex flex-col p-2 '>
      <img className=' mx-auto bg-white' src={ImgAbout} alt="/" /> 
          </div>

          <div className='w-full flex flex-col p-2 pt-10  text-blue-900'>
          <h1 className='font-bold text-3xl  pb-5'>Collaborative<br/> Intelligence <br/>for Better Healthcare</h1>
        <main>Digital Healthcare Solutions for</main>
        <h4 className='font-bold text-lg  pt-2'>Government and Healthcare<br/> Regulators</h4>
        <hr className='w-20 h-2  bg-blue-400 rounded mt-4 mb-4'/>
        <main>Supporting government firms to facilitate critical and essential<br/>
         health services. We deliver mission-critical business<br/>
          administration solutions for government-funded healthcare<br/>
           plans that minimize expenses, streamline operations, enhance<br/>
            program support, and develop compliance while implementing<br/>
             automatic, easy-to-use tools and gratifying outcomes for the<br/>
              people and communities they serve.
       </main> 
    

      </div>
      </div>

    </div>
  )
}

export default About;
