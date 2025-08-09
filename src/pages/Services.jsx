// component/Services.jsx
const Services = () => {
    return (
      <section id="services" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "General Checkup", desc: "Routine exams for early detection and prevention." },
              { title: "Emergency Care", desc: "24/7 emergency services for urgent medical situations." },
              { title: "Surgery", desc: "Advanced surgical procedures with modern equipment." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  