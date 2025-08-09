// component/Contact.jsx
const Contact = () => {
    return (
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">Need help? Have questions? Reach out to us below.</p>
  
          <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
              <p className="text-gray-600">123 Health Street, Pune, Maharashtra</p>
              <p className="text-gray-600">Phone: +91-9876543210</p>
              <p className="text-gray-600">Email: info@hospital.com</p>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
              <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" />
              <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded h-32"></textarea>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  