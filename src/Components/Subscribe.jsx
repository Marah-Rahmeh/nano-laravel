import React from 'react';
import axios from 'axios';
import { useState } from 'react';



function Subscribe() {

  const [email, setEmail] = useState("");  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('http://localhost:8000/add-subscriper', 
                                  {email:'m355546@gmail.com'},
                                  {headers :  {
                                    'Access-Control-Allow-Origin': true,
                                    'Content-Type': 'application/json',
                                  }}); 
    if(res.data.status === 200){ console.log(res.data.massage);}
  }

  
  return (
     <div className='w-full py-16 text-white px-4 bg-blue-100 items-center'>
          <div className=' items-center  w-full'>
            <h1 className='text-[#16375B] font-bold text-xl text-center pb-4'>Subscribe Our Newsletter</h1>
            <form onSubmit={handleSubmit}>
            <input
              className='p-3 w-96 rounded-md text-black ml-96'
              type='email'
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type="submit" className='bg-[#1D829A]  rounded-md font-medium w-[200px] px-6 py-3'>
            Subscribe
            </button>
            </form>
        </div>
      </div>
  )
}

export default Subscribe
