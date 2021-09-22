import React, { memo } from 'react';
import error from './images/notfound.png';

const App = () => {
  return (
    <div className='flex flex-col h-screen p-6 font-mono'>
      {/* header */}
      <div>
        <span className='text-2xl font-bold'>
          404 NOT FOUND
        </span>
      </div>
      {/* content */}
      <div className='flex flex-col items-center justify-center h-screen md:flex-row'>
        {/* image */}
        <div className='flex items-center flex-1 mt-10 md:mt-0'>
          <img src={error} alt='404 not found' />
        </div>
        {/* text */}
        <div className='flex-1 md:ml-8'>
          <h1 className='text-6xl font-bold'>
            I have bad news for you
          </h1>
          <p className='mt-6 text-2xl'>
            The page you are looking for might be
            removed or is temporarily unavailable
          </p>
          <a
            className='inline-block py-4 mt-6 text-lg tracking-wider text-white bg-gray-600 rounded px-7'
            href='#'
          >
            BACK TO HOMEPAGE
          </a>
        </div>
      </div>
      {/* made by */}
      <div className='flex justify-center'>
        <p className='text-gray-400'>
          created by{' '}
          <a
            className='border-b-2'
            href='https://devchallenges.io/portfolio/Ri5ha6h'
            target='_blank'
          >
            Rishabh Malik
          </a>{' '}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default memo(App);
