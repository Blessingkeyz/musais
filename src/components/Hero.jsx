const Hero = () => {
  return (
    <div className="py-10  text-center">
      <h1
        style={{ fontSize: "77.33px", color: "#ffecd2" }}
        className=" font-Kodchasan font-semibold -mb-3"
      >
        Design. Develop. Deliver. <br /> The Musais Way
      </h1>
      <img
        src="src\assets\images\line.png"
        className="mx-auto mb-8 w-[300px] h-5 "
      />
      <p className="text-2xl text-white mb-6">
        We Build Websites That Make Your{" "}
        <span className="bg-white bg-opacity-10 font-bold ">
          Business Shine
        </span>
      </p>
      <button className="bg-gray-100 hover:bg-gray-300 py-3 px-8 rounded-full">
        Book a chat with Amena {""}
        <i className="far fa-envelope fa-lg"></i>
      </button>

      <p className="text-white italic text-xl font-extralight mb-10">
        Best websites ever!
      </p>
      <div className=" md:flex hidden   justify-center ml-[1.5%] 2xl:mx-[15%] items-center">
        <img
          src="src\assets\images\hero.png"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-[10%] grid grid-cols-1 md:hidden gap-2 items-center">
        <img
          src="src\assets\images\one.png"
          alt="Work 1"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\images\two.png"
          alt="Work 2"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\images\three.png"
          alt="Work 3"
          className="w-full h-full object-cover"
        />
        <img
          src="src\assets\images\four.png"
          alt="Work 4"
          className="w-full h-full object-cover"
        />
      </div>
      <a href="#" className="text-white float-right mr-4">
        View all projects
      </a>
    </div>
  );
};

export default Hero;
