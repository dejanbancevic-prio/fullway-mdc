import HeroBanner from "./components/HomePage/HeroBanner";
import MostPopularTire from "./components/HomePage/MostPopularTire";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroBanner />

      <MostPopularTire />

      {/* <div className="w-full max-w-7xl ">
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
        <h1 className="text-5xl italic">BEST TIRES</h1>
      </div> */}
    </main>
  );
};

export default HomePage;
