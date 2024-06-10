import React from 'react';
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";

interface ScrollProps {
  onPrev: () => void;
  onNext: () => void;
}

const Scroll: React.FC<ScrollProps> = ({ onPrev, onNext }) => {
  return (
    <div className='flex items-center justify-center bg-black h-17 mobile:h-12 desktop:h-20'>
      <button aria-label="Scroll Left" onClick={onPrev} className='flex items-center justify-center mobile:p-3 desktop:p-4 hover:bg-dark-gray'>
        <img src={angleLeft} alt="Scroll Left" className='' />
      </button>
      <button aria-label="Scroll Right" onClick={onNext} className='flex items-center justify-center mobile:p-3 desktop:p-6 hover:bg-dark-gray'>
        <img src={angleRight} alt="Scroll Right" className='' />
      </button>
    </div>
  );
}

export default Scroll;
