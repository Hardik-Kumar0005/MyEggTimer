import React from 'react';
import Image from 'next/image';
type EggModeProps = {
  onSelect: (mode: string) => void;
  onHome: () => void;
};

// Available MODES
const EggMode: React.FC<EggModeProps> = ({ onSelect, onHome }) => (
  <>
  <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-center">
        
        {/* SOFT */}
      <div onClick={() => onSelect('soft')} className="cursor-pointer group flex flex-col items-center">
        <div className="w-28 h-28 flex items-center justify-center">
          <Image src="./SoftEggs.svg" alt="soft eggs" width={112} height={112} className="scale-130 object-contain transform group-hover:scale-150 transition-transform" />
        </div>
        {/* MEDIUM */}
      </div>
      <div onClick={() => onSelect('medium')} className="cursor-pointer group flex flex-col items-center">
        <div className="w-28 h-28 flex items-center justify-center">
          <Image src="./MedEgg.svg" alt="medium egg" width={92} height={112} className="object-contain transform group-hover:scale-110 transition-transform" />
        </div>

        {/* HARD */}
      </div>
      <div onClick={() => onSelect('hard')} className="cursor-pointer group flex flex-col items-center">
        <div className="w-28 h-28 flex items-center justify-center overflow-hidden">
          <Image src="/HardEgg.svg" alt="hard egg" width={140} height={140} className="object-cover scale-160 group-hover:scale-180 transition-transform" />
        </div>

        {/* VERY HARD */}
      </div>
      <div onClick={() => onSelect('very-hard')} className="cursor-pointer group flex flex-col items-center">
        <div className="w-28 h-28 flex items-center justify-center">
          <Image src="./VHardEgg.svg" alt="very hard egg" width={112} height={112} className="object-contain transform group-hover:scale-110 transition-transform" />
        </div>
      </div>


    </div>
    <div className="flex justify-center pb-2">
        {/* The home button navigates back to the StartScreen. */}
        <button onClick={onHome} className="cursor-pointer bg-cyan-950 text-white p-3 rounded-full border-2 border-black shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </button>
    </div>
  </>
);

export default EggMode;
