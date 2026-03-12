import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8 font-serif">
          Vistara Living
        </h2>
        <p className="text-gray-600 leading-8 text-lg mb-8">
          Vistara Living brings to you a High-End Range of Interior Products such as 
          <strong> Indian & Imported Wallpapers</strong>, Customized Wallpapers, Furnishing, and Flooring.
          We aim to provide services to Homes, Commercial Offices, Hotels, and Villas. 
          We design each space individually by keeping in mind the Client's Requirements and Budget.
        </p>
        <p className="text-gray-800 font-medium text-lg">
          We at Vistara Living - <br/>
          <span className="text-blue-900 font-bold">Ms. Neha Manekar</span> (Principal Interior Designer) <br/>
          & <span className="text-blue-900 font-bold">Mr. Irshad Khan</span> (Expert Technical Head).
        </p>
        
        <div className="mt-8">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-lg">
            Know More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;