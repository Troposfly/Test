import HeroSection from '../components/HeroSection';
import FlightSearchForm from '../components/FlightSearchForm';
import FeaturedFlights from '../components/FeaturedFlights';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlightSearchForm />
      <FeaturedFlights />
      <Footer />
    </div>
  );
};

export default HomePage;
