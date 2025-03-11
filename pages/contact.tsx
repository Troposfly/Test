import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
        <p className="mt-4">
          If you have any questions, feel free to reach out to us using the form
          below or by sending us an email at <a href="mailto:support@troposfly.com" className="text-blue-500">support@troposfly.com</a>.
        </p>

        <div className="mt-6">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;



