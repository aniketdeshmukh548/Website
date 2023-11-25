import React from 'react'
import arrayDestruct from '../assets/portfolio/mailbox.png'
import installNode from '../assets/portfolio/expensetracker.png'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
const Portfolio = () => {
    const imgarr=[
        {
            id:1,src:arrayDestruct
        },{
            id:2,src:installNode
        },{
            id:3,src:navbar
        },{
            id:4,src:reactParallax
        },{
            id:5,src:reactSmooth
        },{
            id:6,src:reactWeather
        },
    ]
    var links = [
        'https://emailboxclient.netlify.app',
        'https://dailyexpense-tracker.netlify.app',
    ];var linkIndex = 0;
    function goToNextLink() {
        window.location.href = links[linkIndex];
        linkIndex= (linkIndex + 1) % links.length;
    }
  return (
    <div name='portfolio' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className=' py-6'>Check out some of my work here</p>
            </div>
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                imgarr.map(({id,src})=>(
                <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
                    <div className=' flex items-center justify-center'>
                        <button className=' w-1/2 px-3 py-6 m-4 duration-200 hover:scale-105' onClick={goToNextLink}>Demo</button>
                        <button className=' w-1/2 px-3 py-6 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio