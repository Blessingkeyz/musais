const Client = () => {
  return (
    <div className="bg-[#0c0e0e] p-10 rounded-3xl border-2 bg-opacity-30 border-[#c8d8d9] shadow-lg lg:mx-auto lg:max-w-4xl mx-[10%] mt-10">
      <h2 className="text-center text-[#ffecd2] text-6xl font-Kodchasan font-semibold mb-5">
        Why Clients Choose Us?
      </h2>
      <hr className="border-t border-[#ffecd2] w-1/2 mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#ffecd2]">
        <div className="space-y-3">
          <i className=" fas p-3 rounded-xl bg-white text-teal-800 fa-laptop fa-3x "></i>
          <h3 className="text-2xl font-semibold">Responsive Design</h3>
          <p className="text-sm">
            Crafting websites that adjust smoothly across devices for user
            experience on desktops, tablets, and mobile.
          </p>
        </div>

        <div className="space-y-3">
          <i className=" fas rounded-xl bg-white text-teal-800 p-3 fa-code fa-3x "></i>
          <h3 className="text-2xl font-semibold">Custom Development</h3>
          <p className="text-sm">
            Developing unique websites for each, blending creativity and
            functionality to stand out.
          </p>
        </div>

        <div className="space-y-3">
          <i className="fas p-3 rounded-xl bg-white text-teal-800 fa-pen-nib fa-3x"></i>
          <h3 className="text-2xl font-semibold">Best Blogs</h3>
          <p className="text-sm">
            We write best blogs and articles for our clients, that`s why people
            choose Musais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
