import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center text-white p-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find Your Perfect Flight</h1>
        <p className="text-lg mb-6">Explore our flight options and get the best deals!</p>
        <form className="flex gap-4 justify-center">
          <input className="px-4 py-2 rounded-full border border-white bg-transparent text-white" type="text" placeholder="From" />
          <input className="px-4 py-2 rounded-full border border-white bg-transparent text-white" type="text" placeholder="To" />
          <input className="px-4 py-2 rounded-full border border-white bg-transparent text-white" type="date" />
          <button className="px-6 py-2 rounded-full bg-blue-500 text-white">Search</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
