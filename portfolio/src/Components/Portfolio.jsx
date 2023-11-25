import React from 'react';
import arrayDestruct from '../assets/portfolio/mailbox.png';
import installNode from '../assets/portfolio/expensetracker.png';
import navbar from '../assets/portfolio/restaurant.png';
import reactParallax from '../assets/portfolio/portfolio.png';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
  const imgarr = [
    { id: 1, src: arrayDestruct, demoLink: 'https://emailboxclient.netlify.app', codeLink: 'https://github.com/aniketdeshmukh548/Mail-Box' },
    { id: 2, src: installNode, demoLink: 'https://dailyexpense-tracker.netlify.app', codeLink: 'https://github.com/aniketdeshmukh548/Expense-Tracker-React' },
    { id: 3, src: navbar, demoLink: 'https://restaurantwbsite.netlify.app', codeLink: 'https://github.com/aniketdeshmukh548/Restaurant-website' },
    { id: 4, src: reactParallax, demoLink: 'https://anikets-portfolio.netlify.app', codeLink: 'https://github.com/aniketdeshmukh548/Website' },
    { id: 5, src: reactSmooth, demoLink: '', codeLink: '' },
    { id: 6, src: reactWeather, demoLink: '.', codeLink: '' },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, '_blank');
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, '_blank');
  };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {imgarr.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-3 py-6 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(demoLink)}>
                  Demo
                </button>
                <button className='w-1/2 px-3 py-6 m-4 duration-200 hover:scale-105' onClick={() => handleCodeClick(codeLink)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
