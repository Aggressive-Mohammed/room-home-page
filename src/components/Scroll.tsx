import React from 'react';
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";

interface ScrollProps {
  onPrev: () => void;
  onNext: () => void;
}

const Scroll: React.FC<ScrollProps> = ({ onPrev, onNext }) => {
  return (
    <div className='flex items-center justify-center center bg-black h-8 w-15 lg:h-16 lg:w-30'>
      <div  onClick={onPrev} className='hover:bg-dark-gray p-3 flex items-center justify-center lg:p-6 '>
        <img src={angleLeft} alt="Scroll Left" className='h-2 lg:h-4' />
      </div>
      <div onClick={onNext} className='hover:bg-dark-gray p-3 flex items-center justify-center lg:p-6'>
        <img src={angleRight} alt="Scroll Right" className=' h-2 lg:h-4' />
      </div>
    </div>
  );
}

export default Scroll;
