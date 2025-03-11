// src/components/FlightResults.tsx

import React from 'react';

type Flight = {
  airline: string;
  departure: string;
  arrival: string;
  price: string;
  duration: string;
};

type FlightResultsProps = {
  flights: Flight[];
};

const FlightResults: React.FC<FlightResultsProps> = ({ flights }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Flight Results</h2>
      {flights.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((flight, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{flight.airline}</h3>
                <span className="text-lg text-green-600">{flight.price}</span>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>Departure:</strong> {flight.departure}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Arrival:</strong> {flight.arrival}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Duration:</strong> {flight.duration}
              </p>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No flights found. Try adjusting your search.</p>
      )}
    </div>
  );
};

export default FlightResults;
