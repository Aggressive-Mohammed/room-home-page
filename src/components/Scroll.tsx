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
    // Function to handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    // Add event listener for keyboard navigation
    scrollContainer?.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      scrollContainer?.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPrev, onNext]);

  return (
    <div
      ref={scrollContainerRef}
      tabIndex={0} // Makes the div focusable for keyboard events
      className='flex items-center justify-center bg-black h-8 w-14 desktop:h-16 desktop:w-40 desktop:justify-around'
      aria-label="Scroll Navigation" 
    >
      {/* Button to scroll left */}
      <button
        onClick={onPrev}
        className='hover:bg-dark-gray p-3 flex items-center justify-center desktop:py-4 desktop:px-8'
        aria-label="Scroll Left" 
        role="button"
      >
        <img src={angleLeft} alt="Scroll Left" className='h-2 desktop:h-8' />
      </button>
      {/* Button to scroll right */}
      <button
        onClick={onNext}
        className='hover:bg-dark-gray p-3 flex items-center justify-center desktop:py-4 desktop:px-8'
        aria-label="Scroll Right"
        role="button"
      >
        <img src={angleRight} alt="Scroll Right" className='h-2 desktop:h-8' />
      </button>
    </div>
  );
}

export default Scroll;
