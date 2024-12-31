import hero_banner from "../../assets/images/hero_banner.png";

const Hero = () => {
  return (
    <div className="container mx-auto py-12">
      <div
        className="hero min-h-[600px] rounded-3xl"
        style={{
          backgroundImage: `url(${hero_banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[60rem]">
            <h1 className="mb-6 text-5xl font-lexend font-bold text-[52px] text-white">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-10 font-lexend font-normal text-lg text-white">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-6 justify-center items-center">
              <a className="btn border-[#0BE58A] hover:border-[#0BE58A] bg-[#0BE58A] hover:bg-[#0BE58A] text-black rounded-full px-7 h-[65px] font-lexend font-semibold text-xl">
                Explore Now
              </a>
              <a className="btn btn-outline border-white hover:border-white bg-transparent hover:bg-transparent text-white rounded-full px-7 h-[65px] font-lexend font-semibold text-xl">
                Our Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
