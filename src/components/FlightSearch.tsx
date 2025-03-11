'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Calendar } from 'lucide-react';
import { DatePickerProps } from 'react-datepicker';
// Dynamically import AsyncSelect to avoid SSR issues
const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false });

// Dynamically import DatePicker with correct type handling
const DatePicker = dynamic(
  () => import('react-datepicker').then((mod) => mod.default as unknown as React.ComponentType<DatePickerProps>),
  { ssr: false }
);

import 'react-datepicker/dist/react-datepicker.css';

interface AirportOption {
  value: string;
  label: string;
}

interface City {
  from: string;
  to: string;
  date: Date | null;
  returnDate?: Date | null;
}

export default function FlightSearch() {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('one-way');
  const [cities, setCities] = useState<City[]>([
    { from: '', to: '', date: null, returnDate: null },
  ]);

  const handleAddCity = () => {
    setCities([...cities, { from: '', to: '', date: null, returnDate: null }]);
  };

  // Mock airport data
  const fetchAirports = async (inputValue: string) => {
    if (!inputValue) return [];

    return [
      { value: 'JFK', label: 'John F. Kennedy International Airport (JFK), New York, USA' },
      { value: 'LAX', label: 'Los Angeles International Airport (LAX), Los Angeles, USA' },
      { value: 'ORD', label: 'O\'Hare International Airport (ORD), Chicago, USA' },
      { value: 'SFO', label: 'San Francisco International Airport (SFO), San Francisco, USA' },
      { value: 'ATL', label: 'Hartsfield-Jackson Atlanta International Airport (ATL), Atlanta, USA' },
      { value: 'BOS', label: 'Logan International Airport (BOS), Boston, USA' },
      { value: 'DUB', label: 'Dublin Airport (DUB), Dublin, Ireland' },
      { value: 'CDG', label: 'Charles de Gaulle Airport (CDG), Paris, France' },
      { value: 'LHR', label: 'London Heathrow Airport (LHR), London, United Kingdom' },
      { value: 'FRA', label: 'Frankfurt Airport (FRA), Frankfurt, Germany' },
      { value: 'SYD', label: 'Sydney Kingsford Smith Airport (SYD), Sydney, Australia' },
      { value: 'SIN', label: 'Singapore Changi Airport (SIN), Singapore' },
      { value: 'DXB', label: 'Dubai International Airport (DXB), Dubai, UAE' },
      { value: 'HKG', label: 'Hong Kong International Airport (HKG), Hong Kong' },
      { value: 'PEK', label: 'Beijing Capital International Airport (PEK), Beijing, China' },
      { value: 'BKK', label: 'Suvarnabhumi Airport (BKK), Bangkok, Thailand' },
      { value: 'ICN', label: 'Incheon International Airport (ICN), Seoul, South Korea' },
      { value: 'AMS', label: 'Amsterdam Schiphol Airport (AMS), Amsterdam, Netherlands' },
      { value: 'KUL', label: 'Kuala Lumpur International Airport (KUL), Kuala Lumpur, Malaysia' },
      { value: 'MEX', label: 'Mexico City International Airport (MEX), Mexico City, Mexico' },
      { value: 'SVO', label: 'Sheremetyevo International Airport (SVO), Moscow, Russia' },
      { value: 'YVR', label: 'Vancouver International Airport (YVR), Vancouver, Canada' },
      { value: 'ZRH', label: 'Zurich Airport (ZRH), Zurich, Switzerland' },
      { value: 'BCN', label: 'Barcelona El Prat Airport (BCN), Barcelona, Spain' },
      { value: 'GRU', label: 'São Paulo–Guarulhos International Airport (GRU), São Paulo, Brazil' },
      { value: 'CGK', label: 'Soekarno–Hatta International Airport (CGK), Jakarta, Indonesia' },
      { value: 'JNB', label: 'O. R. Tambo International Airport (JNB), Johannesburg, South Africa' },
      { value: 'CPT', label: 'Cape Town International Airport (CPT), Cape Town, South Africa' },
      { value: 'TLV', label: 'Ben Gurion Airport (TLV), Tel Aviv, Israel' },
      { value: 'LIM', label: 'Jorge Chávez International Airport (LIM), Lima, Peru' },
      { value: 'DEL', label: 'Indira Gandhi International Airport (DEL), New Delhi, India' },
      { value: 'BOM', label: 'Chhatrapati Shivaji Maharaj International Airport (BOM), Mumbai, India' },
      { value: 'BLR', label: 'Kempegowda International Airport (BLR), Bangalore, India' },
    ];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-2">TroposFly.com</h1>
      <p className="text-gray-600 mb-4">Search the best deals on flights worldwide.</p>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        {/* Trip Type Selection */}
        <div className="flex space-x-4 mb-4">
          {['one-way', 'round-trip', 'multi-city'].map((type) => (
            <button
              key={type}
              onClick={() => {
                setTripType(type as 'one-way' | 'round-trip' | 'multi-city');
                if (type !== 'multi-city') setCities([{ from: '', to: '', date: null, returnDate: null }]);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${tripType === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {type.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Flight Inputs */}
        {cities.map((city, index) => (
          <div key={index} className="flex space-x-2 mb-3">
            <AsyncSelect
              cacheOptions
              loadOptions={fetchAirports}
              placeholder="From"
              className="w-1/4"
              onChange={(selected: AirportOption | null) => {
                const newCities = [...cities];
                newCities[index].from = selected?.value || '';
                setCities(newCities);
              }}
            />
            <AsyncSelect
              cacheOptions
              loadOptions={fetchAirports}
              placeholder="To"
              className="w-1/4"
              onChange={(selected: AirportOption | null) => {
                const newCities = [...cities];
                newCities[index].to = selected?.value || '';
                setCities(newCities);
              }}
            />

            <div className="relative w-1/4">
              <DatePicker
                selected={city.date}
                onChange={(date: Date | null) => {
                  const newCities = [...cities];
                  newCities[index].date = date;
                  setCities(newCities);
                }}
                dateFormat="MM/dd/yyyy"
                placeholderText="Departure"
                className="border p-2 rounded w-full"
              />
              <Calendar className="absolute right-2 top-2 text-gray-500" size={16} />
            </div>

            {/* Show return date for round-trip */}
            {tripType === 'round-trip' && (
              <div className="relative w-1/4">
                <DatePicker
                  selected={city.returnDate}
                  onChange={(date: Date | null) => {
                    const newCities = [...cities];
                    newCities[index].returnDate = date;
                    setCities(newCities);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Return date"
                  className="border p-2 rounded w-full"
                />
                <Calendar className="absolute right-2 top-2 text-gray-500" size={16} />
              </div>
            )}
          </div>
        ))}

        {/* Add City Button for Multi-City */}
        {tripType === 'multi-city' && (
          <button onClick={handleAddCity} className="text-blue-500 text-sm mt-3">Add Another City</button>
        )}

        {/* Search Button */}
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">Search Flights</button>
      </div>
    </div>
  );
}
