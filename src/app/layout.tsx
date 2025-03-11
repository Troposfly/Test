// src/app/layout.tsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

