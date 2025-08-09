// component/Home.jsx
const Home = () => {
    return (
      <section id="home" className="min-h-screen bg-blue-50 flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Welcome to Our Hospital</h1>
          <p className="text-gray-700 text-lg mb-6">Providing Quality Healthcare with Compassion and Excellence</p>
          <a
            href="bookappointment"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </a>
        </div>
      </section>
    );
  };
  
  export default Home;
  