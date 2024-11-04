import { useState } from "react";

const Pricing = () => {
  const [select, setSelect] = useState(1);

  const handleclick = (i) => {
    setSelect(i);
  };
  return (
    <div className=" ui flex flex-col items-center justify-center  text-center">
      <div className="relative mt-20 rounded-lg top-5 left-[135px] md:left-[230px] rotate-[25deg] bg-[#d41f1f] px-4 py-1 text-white text-lg font-bold  ">
        25% Off
      </div>
      <div className="border-[1px] rounded-full text-white text-2xl w-[300px] md:w-[500px] mb-10 flex">
        <button
          onClick={() => handleclick(1)}
          className={` ${
            select === 1 ? "bg-teal-600" : "bg-transparent"
          } rounded-full w-1/2 m-1 py-2 italic`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleclick(2)}
          className={` ${
            select === 2 ? "bg-teal-600" : "bg-transparent"
          } rounded-full w-1/2 m-1 py-2 italic`}
        >
          Yearly
        </button>
      </div>
      <h2 className="text-[#ffecd2] text-6xl font-Kodchasan font-semibold mb-5">
        Pick the Right Plan for You
      </h2>
      <img
        src="\images\line.png"
        className="mx-auto w-[305px] md:w-[605px] lg:w-[885px] mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* <!-- First Plan --> */}
        <div className="relative bg-[#021314] rounded-3xl mt-5 border-[1px] py-20 mx-12 md:mx-0 text-white hover:shadow-xl">
          <div className=" grid justify-center">
            <h3 className="text-2xl  mb-4">XXXXX</h3>
            <p className="text-5xl mb-4 font-semibold">XXXXX</p>
            <button className="bg-gradient-to-b from-teal-900 to-black border-2 text-white py-3 px-10 rounded-xl hover:bg-orange-600">
              Get Started Now
            </button>

            <ul className="text-left text-xl -ml-2 space-y-4">
              <li className="flex mt-4 items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                5 Landing Pages
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Second Plan --> */}
        <div className="relative  bg-gradient-to-b from-teal-900 to-black rounded-3xl border-[1px] py-20 px-20 lg:px-10 xl:px-20 mx-12 md:mx-0 text-white -mb-10 hover:shadow-xl">
          <div className=" grid justify-center">
            <h3 className="text-2xl  mb-4">XXXXX</h3>
            <p className="text-5xl mb-4 font-semibold">
              ${select === 1 ? "999" : "8991"}
              <span className="text-md">/{select === 1 ? "mo" : "yr"}</span>
            </p>
            <button className="bg-white border-2 text-teal-700 font-bold py-3 px-20 lg:px-9 xl:px-16 2xl:px-20 rounded-full hover:bg-gray-200">
              Get Started Now
            </button>

            <ul className="text-left text-xl -ml-2 space-y-4">
              <li className="flex mt-4 items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                5 Landing Pages
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Third Plan --> */}
        <div className=" bg-[#021314] rounded-3xl mt-5 border-[1px] py-20 mx-12 md:mx-0  text-white hover:shadow-xl">
          <div className=" grid justify-center">
            <h3 className="text-2xl  mb-4">XXXXX</h3>
            <p className="text-5xl mb-4 font-semibold">XXXXX</p>
            <button className="bg-gradient-to-b from-teal-900 to-black border-2 text-white py-3 px-10 rounded-xl hover:bg-orange-600">
              Get Started Now
            </button>

            <ul className="text-left text-xl -ml-2 space-y-4">
              <li className="flex mt-4 items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                5 Landing Pages
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
              <li className="flex items-center">
                <svg
                  className="w-8 h-8 mr-2 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                XXXXXXXXXX
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
