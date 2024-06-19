import React from 'react';
import angleLeft from '../images/icon-angle-left.svg';
import angleRight from '../images/icon-angle-right.svg';

interface ScrollProps {
  onPrev: () => void;
  onNext: () => void;
}

const Scroll: React.FC<ScrollProps> = ({ onPrev, onNext }) => {
  return (
    <div className='flex items-center justify-center bg-black h-8 w-14 md:h-12 md:w-28 lg:h-16 lg:w-30'>
      <button 
        onClick={onPrev} 
        className='hover:bg-dark-gray p-3 flex items-center justify-center md:h-6 md:p-6 lg:p-6'
        aria-label="Scroll Left"
        role="button"
      >
        <img src={angleLeft} alt="Scroll Left" className='h-2 md:h-4 lg:h-4' />
      </button>
      <button 
        onClick={onNext} 
        className='hover:bg-dark-gray p-3 flex items-center justify-center md:h-6 md:p-6 lg:p-6'
        aria-label="Scroll Right"
        role="button"
      >
        <img src={angleRight} alt="Scroll Right" className='h-2 md:h-3 lg:h-4' />
      </button>
    </div>
  );
}

export default Scroll;
