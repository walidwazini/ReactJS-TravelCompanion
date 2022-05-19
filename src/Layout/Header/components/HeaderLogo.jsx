import React from "react";

const HeaderLogo = () => {
  return (
    <a
      href='/'
      aria-label='Company'
      title='Company'
      className='inline-flex items-center'
    >
      <svg
        className='w-8 text-teal-accent-400'
        viewBox='0 0 24 24'
        strokeLinejoin='round'
        strokeWidth='2'
        strokeLinecap='round'
        strokeMiterlimit='10'
        stroke='currentColor'
        fill='none'
      >
        <rect x='3' y='1' width='7' height='12' color='white' />
        <rect x='3' y='17' width='7' height='6' color='white' />
        <rect x='14' y='1' width='7' height='6' color='white' />
        <rect x='14' y='11' width='7' height='12' color='white' />
      </svg>
      <span className='ml-2 text-xs md:text-xl font-bold tracking-wide text-gray-100 uppercase'>
        TravelCompanion
      </span>
    </a>
  );
};

export default HeaderLogo;
