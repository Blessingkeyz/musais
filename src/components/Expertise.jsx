const Expertise = () => {
  return (
    <div className="text-center ">
      <h2 className="text-[#ffecd2] text-6xl font-Kodchasan  mb-5">
        Our Expertise
      </h2>
      <img
        src="src\assets\images\line.png"
        className="mx-auto mb-5 w-[400px]"
      />
      <p className="text-2xl mx-2 text-white mb-14">
        Our blend of creativity and technical finesse ensures bespoke solutions
        <br />
        that elevate <span className="font-bold">brands</span> and captivate
        audiences, leaving an unforgettable <br /> imprint on the design
        landscape.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white text-4xl mb-60 mx-[10%] 2xl:mx-[20%]">
        <div className="bg-gradient-to-b -rotate-6 from-teal-900 to-black rounded-3xl py-28 border-8 border-gray-400 ">
          UI/UX Designs
        </div>
        <div className="bg-gradient-to-b rotate-6 from-teal-800 to-teal-900 rounded-3xl border-8 border-gray-400 py-28">
          Web Development
        </div>
        <div className="bg-gradient-to-b -rotate-12 from-teal-800 to-teal-900 rounded-3xl border-8 -ml-5 border-gray-400 py-28">
          Logo Design
        </div>
        <div className="bg-gradient-to-b rotate-12 md:-rotate-12 from-teal-900 to-black rounded-3xl -mt-8 border-8 border-gray-400 py-28">
          Packaging Design
        </div>
        <div className="bg-gradient-to-b -rotate-6 from-teal-800 to-teal-900 rounded-3xl border-8 -mt-5 border-gray-400 py-28">
          Blogs
        </div>
        <div className="bg-gradient-to-b rotate-12 from-teal-800 to-teal-900 rounded-3xl border-8 -ml-5 border-gray-400 py-28">
          Webflow Development
        </div>
      </div>
    </div>
  );
};

export default Expertise;
