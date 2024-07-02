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
      className='flex items-center justify-center bg-black h-8 w-14 md:h-14 md:w-28 lg:h-12 desktop:h-16 desktop:w-40 lg:w-24 desktop:justify-around'
      aria-label="Scroll Navigation"
    >
      <button
        onClick={onPrev}
        className='hover:bg-dark-gray p-3 flex items-center justify-center md:py-5 md:px-6 lg:px-4 lg:py-3 desktop:py-4 desktop:px-8'
        aria-label="Scroll Left"
        role="button"
      >
        <img src={angleLeft} alt="Scroll Left" className='h-2 md:h-4 lg:h-4 desktop:h-8' />
      </button>
      <button
        onClick={onNext}
        className='hover:bg-dark-gray p-3 flex items-center justify-center md:py-5 md:px-6 lg:px-4 lg:py-3 desktop:py-4 desktop:px-8'
        aria-label="Scroll Right"
        role="button"
      >
        <img src={angleRight} alt="Scroll Right" className='h-2 md:h-4 lg:h-4 desktop:h-8' />
      </button>
    </div>
  );
};

export default Scroll;
