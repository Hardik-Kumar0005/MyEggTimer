import React from 'react';
import Image from 'next/image';
import { Timer, getEggModeDuration } from './timer';
type EggTimerProps = {
  onHome: () => void;
  onSettings: () => void;
  mode: string;
};

const EggTimer: React.FC<EggTimerProps> = ({ onHome, onSettings, mode }) => (
  <>
    <EggTimerContent mode={mode} />
    <div className="flex space-x-4">
        {/* The home button takes back to the Start. */}
        <button onClick={onHome} className="cursor-pointer bg-cyan-950 text-white p-3 rounded-full border-2 border-black shadow-md">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </button>
        {/* The options button takes back to the modes screen. */}
        <button onClick={onSettings} className="cursor-pointer bg-cyan-950 text-white p-3 rounded-full border-2 border-black shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </button>
    </div>
  </>
);

export default EggTimer;

// change image after timer runs out else display the chicks
const EggTimerContent: React.FC<{ mode: string }> = ({ mode }) => {
  const [finished, setFinished] = React.useState(false);

  return (
    <div className="flex flex-col items-center w-full mt-16">
      <div className="flex justify-around w-full">
        {finished ? (
          <Image src="/finish.gif" alt="finished egg" width={88} height={88} unoptimized className="relative scale-280 bottom-8 mb-[22px]" />
        ) : (
          <>
            <Image src="/gif.gif" alt="chick 1" width={80} height={80} unoptimized className="relative scale-450 bottom-19" />
          </>
        )}
      </div>
      <Timer duration={getEggModeDuration(mode)} onComplete={() => setFinished(true)} />
    </div>
  );
};
