const Testimonials = () => {
  return (
    <div className="bg-black text-center">
      <div className="bg-gradient-to-b from-teal-900 to-black ">
        <h2 className=" text-[#ffecd2] text-6xl font-Kodchasan font-semibold mb-5">
          Testimonials
        </h2>
        <hr className="border-t border-[#ffecd2] w-1/3 mx-auto mb-12" />
        <p className="text-2xl mx-10 text-white mb-6">
          Let{"'"}s see what our clients say about us!
        </p>
      </div>
      <div className="bg-gradient-to-b from-black to-teal-900">
        <div className=" grid h-[800px] mt-10 mx-12 md:mx-[6%] lg:mx-[15%] grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" grid grid-rows-[3fr_2fr_1fr] gap-4">
            <div className="bg-white"></div>
            <div className="bg-white "></div>
            <div className="bg-white "></div>
          </div>
          <div className=" grid grid-rows-[2fr_1fr] gap-4">
            <div className=" grid grid-rows-[1fr_1fr] gap-4 ">
              <div className="bg-white "></div>
              <div className="bg-white "></div>
            </div>
            <div className="bg-white "></div>
          </div>
          <div className=" grid grid-rows-[2fr_1fr] gap-4">
            <div className="bg-white "></div>
            <div className="bg-white "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
