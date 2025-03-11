import Image from "next/image";
import HeroSection from '../components/HeroSection';
import FlightSearchForm from '../components/FlightSearchForm';
import FeaturedFlights from '../components/FeaturedFlights';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FlightSearchForm />
      <FeaturedFlights />
    </div>
  );
}

