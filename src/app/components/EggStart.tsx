import React from 'react';
import Image from 'next/image';

interface EggStartProps {
  onStart: () => void;
}

const EggStart: React.FC<EggStartProps> = ({ onStart }) => (
  <>
    <div className="relative w-80 h-80 mx-auto mr-3.5">
      <Image
        src="/eggs.gif"
        alt="egg"
        fill={true}
        priority
        className="object-contain"
      />
    </div>
    <button
      onClick={onStart}
      className="cursor-pointer bg-green-500 text-white font-bold mt-4 py-3 px-12 border-b-4 border-green-700 hover:border-green-500 rounded-lg text-2xl shadow-lg transform hover:scale-105 transition-transform  "
    >
      Start
    </button>
  </>
);

export default EggStart;
