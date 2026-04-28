import React from 'react';

import arrowDownIcon from '../../assets/icons/arrow-down.png';
import { WEDDING_DATE_SECTION_ID } from '../../constants/sectionIds';
import { Calendar } from '../Calendar';

export const WeddingDetails: React.FC = () => {
  const weddingDate = new Date(2026, 5, 21);

  return (
    <div className="relative inset-0 after:absolute after:content-[''] after:inset-0 after:bg-black/40 after:rounded-tl-4xl after:rounded-tr-4xl z-2">
      <div className="relative z-3 p-[80px_20px]">
        <div id={WEDDING_DATE_SECTION_ID} className="flex flex-col items-center">
          <h2 className="max-w-100 text-[42px] font-medium italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] mb-22">Սիրելի՛ ընկերներ և հարազատներ</h2>
          <a href={`#${WEDDING_DATE_SECTION_ID}`} className="size-17.5 flex justify-center items-center rounded-full transition-all mb-22 hover:bg-black/30">
            <img src={arrowDownIcon} alt="Arrow down" className="w-17.5 h-10 object-contain animate-pulse [animation-duration:2.5s] mt-1.25" />
          </a>
          <Calendar selected={weddingDate} month={weddingDate} />
        </div>
      </div>
    </div>
  );
};
