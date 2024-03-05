/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../styles/globals.css';


export default function Home() {
  return (
    <main className="h-screen relative">
      {/* Circular region with background image */}
      <div className="circular-background glow-green">
        <img src="/images/Huang-m.png" alt="Background Image" />
      </div>

      {/* Text with white color and green glow */}
      <div className="text-center absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold glow-green">Dawn ToF</h1>
        <p className="text-2xl mt-2">A hub for the latest Tower of Fantasy information and theory</p>
      </div>
    </main>
  );
}