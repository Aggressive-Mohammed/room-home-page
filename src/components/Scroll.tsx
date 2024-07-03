import React, { useEffect, useRef } from 'react';
import angleLeft from '../images/icon-angle-left.svg';
import angleRight from '../images/icon-angle-right.svg';

interface ScrollProps {
  onPrev: () => void;
  onNext: () => void;
}

const Scroll: React.FC<ScrollProps> = ({ onPrev, onNext }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPrev, onNext]);

  return (
    <div
      ref={scrollContainerRef}
      tabIndex={0}
      className='flex items-center justify-center bg-black h-8 w-14 md:h-14 md:w-28 lg:h-12 desktop:h-16 desktop:w-[168px] lg:w-[130px] xl:w-[137px] xl:h-14 desktop:justify-around'
      aria-label="Scroll Navigation"
    >
      <button
        onClick={onPrev}
        className='hover:bg-dark-gray h-8 p-3 flex items-center justify-center md:py-7 md:px-6 md:h-13 lg:px-5 lg:pl-9 lg:py-6 xl:pl-9 xl:py-7 desktop:py-5 desktop:px-9 bg-black'
        aria-label="Scroll Left"
      >
        <img src={angleLeft} alt="Scroll Left" className='xl:h-4' />
      </button>
      <button
        onClick={onNext}
        className='hover:bg-dark-gray h-8 p-3 flex items-center justify-center md:py-7 md:px-6 lg:px-5 lg:pr-9 lg:py-6 md:h-13 xl:py-7 xl:pl-9  desktop:py-5 desktop:px-9 bg-black'
        aria-label="Scroll Right"
      >
        <img src={angleRight} alt="Scroll Right" className='xl:h-4' />
      </button>
    </div>
  );
};

export default Scroll;
