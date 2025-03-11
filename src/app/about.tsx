
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
        <p className="mt-4 text-lg">
          Welcome to Troposfly! We are a leading flight search and booking platform that helps you
          find the best flights at the most affordable prices. Our goal is to provide seamless
          travel experiences for individuals, families, and business travelers.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700">Our Mission</h3>
          <p className="mt-2">
            At Troposfly, we are dedicated to helping you plan your trips with ease and convenience.
            We aim to offer a comprehensive platform with a wide range of flight options, ensuring
            you can book your flights confidently and efficiently.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h3>
          <ul className="mt-2 list-disc list-inside">
            <li className="mt-2">Wide range of flight options from various airlines.</li>
            <li className="mt-2">Competitive prices and exclusive deals for our users.</li>
            <li className="mt-2">Easy and fast booking process with secure payment options.</li>
            <li className="mt-2">24/7 customer support to assist with any inquiries or issues.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;


