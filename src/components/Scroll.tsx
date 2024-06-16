import React from 'react';
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";

interface ScrollProps {
  onPrev: () => void;
  onNext: () => void;
}

const Scroll: React.FC<ScrollProps> = ({ onPrev, onNext }) => {
  return (
    <div className='flex items-center justify-center bg-black h-8 w-auto'>
      <button aria-label="Scroll Left" onClick={onPrev} className='flex items-center justify-center hover:bg-dark-gray h-8 p-2'>
        <img src={angleLeft} alt="Scroll Left" className='px-2 h-3' />
      </button>
      <button aria-label="Scroll Right" onClick={onNext} className='flex items-center justify-center hover:bg-dark-gray h-8 p-2'>
        <img src={angleRight} alt="Scroll Right" className='px-2 h-3' />
      </button>
    </div>
  );
}

export default Scroll;
