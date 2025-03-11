import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main>{children}</main> {/* No HeroSection here */}
          <Footer />
        </div>
      </body>
    </html>
  );
}



