const Footer = () => {
  return (
    <footer className="ui bg-[#000000b8] justify-between items-center flex py-20">
      <div className=" ml-10 flex items-center">
        <img src={"/logo.png"} alt="WM Logo" className="h-12" />
        <p style={{ color: "#FFECD2" }} className="font-Kodchasan text-2xl">
          Musais
        </p>
      </div>
      <div className="text-center mr-10  space-x-4 text-2xl text-white">
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
