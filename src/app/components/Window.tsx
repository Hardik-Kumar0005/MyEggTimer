import React from 'react';
type WindowProps = {
  title: string;
  children: React.ReactNode;
};

// This component provides the consistent window styling for all screens.
const Window: React.FC<WindowProps> = ({ title, children }) => (
  <div className="bg-gradient-to-br from-green-400 to-yellow-300 min-h-screen flex items-center justify-center font-mono">
    <div className="w-full max-w-sm border-4 border-black rounded-lg shadow-xl bg-[#52C4F5]">
      <div className="bg-[#2E8A9B] text-white p-2 flex justify-between items-center border-b-1 border-black">
        <h1 className="text-2xl font-bold tracking-wider">{title}</h1>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-green-400 border-2 border-black rounded-full"></div>
          <div className="w-8 h-5 bg-black rounded-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-6 relative h-80 bg-no-repeat bg-cover" >
         <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/bg.png')" }}></div>
         <div className="relative z-10 h-full flex flex-col items-center justify-between">
            {children}
         </div>
      </div>
    </div>
  </div>
);

export default Window;
