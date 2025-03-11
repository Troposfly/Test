import React from 'react';

const FeaturedFlights = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Flights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Flight to Destination {idx + 1}</h3>
              <p className="mt-2 text-gray-600">Description of the flight details...</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlights;
