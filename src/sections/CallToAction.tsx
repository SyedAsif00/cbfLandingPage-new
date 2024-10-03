import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5 ">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        {/* Form Section */}
        <div className="flex flex-col items-center mt-10 space-y-4 w-full md:flex-row md:justify-center md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-64"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-64"
          />
          <button className="btn btn-primary px-6 py-3">Subscribe</button>
        </div>

        <div className="flex gap-2 mt-[130px] justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1 flex items-center">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
