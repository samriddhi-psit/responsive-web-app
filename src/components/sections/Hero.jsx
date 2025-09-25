import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">MyWebsite</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl">
            Explore our work, get inspired, and be a part of something amazing.
            This responsive page shows API data and lets you connect through our
            Get Involved form.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Button href="#our-work" variant="primary">
              See Our Work
            </Button>
            <Button href="#get-involved" variant="secondary">
              Get Involved
            </Button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="/vite.svg"
            alt="Hero Illustration"
            className="w-64 md:w-96 drop-shadow-xl animate-bounce"
          />
        </div>
      </div>
    </section>
  );
}
