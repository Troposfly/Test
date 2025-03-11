"use client";
// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-100 py-20">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">TroposFly.com</h1>
        <p className="mt-4 text-xl text-gray-600">Search the best deals on flights worldwide.</p>
        
        {/* Flight Search Form */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-center gap-4">
          <input
            type="text"
            className="border px-4 py-2 rounded-md w-full sm:w-1/3"
            placeholder="From"
          />
          <input
            type="text"
            className="border px-4 py-2 rounded-md w-full sm:w-1/3"
            placeholder="To"
          />
          <input
            type="date"
            className="border px-4 py-2 rounded-md w-full sm:w-1/3"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md w-full sm:w-auto mt-4 sm:mt-0">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

