const Client = () => {
  return (
    <div className="bg-[#0c0e0e] ui p-10 rounded-3xl border-2 bg-opacity-30 border-[#c8d8d9] shadow-lg lg:mx-auto lg:max-w-4xl mx-[10%] mt-10">
      <h2 className="text-center text-[#ffecd2] text-6xl font-Kodchasan font-semibold mb-5">
        Why Clients Choose Us?
      </h2>
      <img
        src="src\assets\images\line.png"
        className="mx-auto mb-12 w-[550px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#ffecd2]">
        <div className="space-y-3">
          <img
            src="src\assets\images\cl1.png"
            className="mx-auto rounded-xl p-4 bg-white"
          />
          <h3 className="text-2xl font-semibold">Responsive Design</h3>
          <p className="text-sm">
            Crafting websites that adjust smoothly across devices for user
            experience on desktops, tablets, and mobile.
          </p>
        </div>

        <div className="space-y-3">
          <img
            src="src\assets\images\cl2.png"
            className="mx-auto rounded-xl p-4 bg-white"
          />
          <h3 className="text-2xl font-semibold">Custom Development</h3>
          <p className="text-sm">
            Developing unique websites for each, blending creativity and
            functionality to stand out.
          </p>
        </div>

        <div className="space-y-3">
          <img
            src="src\assets\images\cl3.png"
            className="mx-auto rounded-xl p-4 bg-white"
          />
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
