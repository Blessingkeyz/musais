const Testimonials = () => {
  return (
    <div className=" text-center">
      <h2 className=" text-[#ffecd2] text-6xl font-Kodchasan font-semibold mb-5">
        Testimonials
      </h2>
      <img
        src="src\assets\images\line.png"
        className="mx-auto mb-5 w-[400px]"
      />
      <p className="text-2xl mx-10 text-white mb-10">
        Let{"'"}s see what our clients say about us!
      </p>

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
  );
};

export default Testimonials;
