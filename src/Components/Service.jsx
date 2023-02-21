import React from 'react';


function Service() {

    const cards=[
        {   
            img:require("./../assest/Service/service1.png"),
            names:'NANO PBM',
            desc:'Pharmacy Benefits Managemen'
        },
        {
            img:require("./../assest/Service/service2.png"),
            names:'NANO DRG',
            desc:'Diagnosis Related Group Assignment'
        },
        {
            img:require("./../assest/Service/service3.png"),
            names:'NANO EMR',
            desc:'Electronic Medical Records'
        },
        {
            img:require("./../assest/Service/service4.png"),
            names:'NANO IDDK',
            desc:'International Drug Data Knowledge'
        },
        {
            img:require("./../assest/Service/service5.png"),
            names:'NANO MED',
            desc:'Medical Coding Rules'
        },


    ]
  return (

    <div className='mt-10 bg-[#F2F7FA]'>
    <div className='text-center'>
    <h1 className=' font-bold text-3xl pt-12 text-blue-900 '>Healthcare Service Providers</h1>
    <hr className='w-20 h-2 mx-auto bg-blue-400 rounded mt-4 mb-4'/>
    <span >Remodeling the patient experience while encouraging efficiencies. Unifies integration and data control into a unique<br/>
     platform to connect data from diverse operations, applications and data sources across the entire care network.</span>
         </div>

    <div className='w-full py-[10rem] '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8'>
        {
            //cards.map(({img,names,desc}) =>(
            cards.map((record, i) =>(
                <div className='w-full flex flex-col p-2 my-4 rounded-lg hover:bg-[#2EB9CC] bg-white hover:text-white' key={i}>
                <img className='w-20 mx-auto  bg-white' src={record.img} alt="/"/>
                <h2 className='text-2xl text-center '>{record.names}</h2>
                <p className='text-center'>{record.desc}</p>
            </div>   
            )

            )
        }

      </div>
    </div>
    

      </div>

  )
}

export default Service
