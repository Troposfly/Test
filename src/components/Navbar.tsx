import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-lg">
    <div className="max-w-screen-xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">TroposFly</Link>
      <div className="space-x-6">
        <Link href="/about" className="hover:text-gray-200">About</Link>
        <Link href="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 



  