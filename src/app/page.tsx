"use client"; // This directive is necessary for components that use state or event listeners.

import React, { useState } from 'react';
import WindowFrame from './components/Window';
import StartScreen from './components/EggStart';
import OptionsScreen from './components/EggMode';
import TimerScreen from './components/EggTimer';

// This is the main page component that controls the application's state.
export default function Home() {
  // State to manage which screen is currently visible.
  const [screen, setScreen] = useState('start'); // Can be 'start', 'options', or 'timer'
  
  // State to store the selected egg type (e.g., 'soft', 'medium').
  const [selection, setSelection] = useState<string | null>(null);

  // Navigates from the start screen to the options screen.
  const handleStart = () => {
    setScreen('options');
  };

  // Sets the chosen egg type and navigates to the timer screen.
  const handleSelect = (option: string) => {
    setSelection(option);
    console.log('Selected:', option); // You can use this to set the timer duration.
    setScreen('timer');
  };
  
  // Navigates back to the start screen (home).
  const handleHome = () => {
    setScreen('start');
  };

  // This function determines which component to render based on the current screen state.
  const renderScreen = () => {
    const finishedImage = '/file.svg'; // Replace with your image path
    switch (screen) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'options':
        return <OptionsScreen onSelect={handleSelect} onHome={handleHome} />;
      case 'timer':
        // Pass the selected mode and finished image to TimerScreen
  return <TimerScreen mode={selection || 'soft'} onHome={handleHome} onSettings={() => setScreen('options')} />;
      default:
        // Default to the start screen if the state is invalid.
        return <StartScreen onStart={handleStart} />;
    }
  };

  // The main render output for the page.
  return (
    <main>
      <WindowFrame title="Egg Timer">
        {renderScreen()}
      </WindowFrame>
    </main>
  );
}
