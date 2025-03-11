import React, { useState } from 'react';

const FlightSearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSearch = () => {
    // Placeholder function for handling the search (you can later connect this to an API)
    console.log('Searching for flights from', from, 'to', to, 'on', departureDate);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <input 
        type="text" 
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300"
        placeholder="From"
      />
      <input 
        type="text" 
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300"
        placeholder="To"
      />
      <input 
        type="date" 
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300"
      />
      <button 
        onClick={handleSearch}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
      >
        Search Flights
      </button>
    </div>
  );
};

export default FlightSearchForm;
