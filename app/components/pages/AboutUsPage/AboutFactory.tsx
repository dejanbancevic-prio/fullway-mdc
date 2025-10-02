import Image from "next/image";

const AboutFactory = () => {
  return (
    <div className="w-full bg-fullwayGrey ">
      <div className=" md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col gap-[3rem] mt-[2rem] md:mt-[1.5rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[2.12rem] md:gap-[0rem]">
          <div className="flex flex-col justify-start text-black ">
            <Image
              src="/images/AboutUsPage/AboutFactory/Coin.svg"
              alt="Coin Icon"
              width={28}
              height={28}
              className="w-[4.875rem] h-auto md:mb-[1.88rem] mb-[1.5rem]"
            />

            <h2 className="font-[700] text-[2.25rem] italic leading-none ">
              DRIVEN BY TRUST
            </h2>

            <div className="border-b-5 border-fullwayRed  mb-[1.5rem] w-[8.3rem] " />

            <p className="font-[300] text-[1.25rem] md:mb-[2.25rem] md:pr-[27.5rem]">
              We are committed to providing reliable tires that keep you safe on
              the road, no matter the conditions. Our mission is to be the brand
              you trust for every journey.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/AboutUsPage/AboutFactory/car-1.png"
              alt="SUV Background"
              width={1920}
              height={1080}
              className="w-[45rem] h-[25rem] pl-[6.5rem] overflow-hidden md:pl-[0rem] md:mb-[1.88rem] "
            />

            <div className="absolute top-[0.1rem] md:-left-25 w-[18.1875rem] h-[25rem]">
              <Image
                src="/images/AboutUsPage/AboutFactory/tire-1.svg"
                alt="HS 288 Tire"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-between items-center gap-[2.12rem] md:gap-[0rem] mb-[1.5rem] mr-[1rem]">
          <div className="relative">
            <Image
              src="/images/AboutUsPage/AboutFactory/factory-1.png"
              alt="SUV Background"
              width={1920}
              height={1080}
              className="w-[31rem] h-[25rem] overflow-hidden md:pr-[0rem] relative -left-[2rem] md:-left-[0rem] "
            />
          </div>

          <div className="flex flex-col text-black md:max-w-[30rem]  ">
            <h2 className="font-[700] text-[2.25rem] italic leading-none ">
              BEHIND THE BUILD
            </h2>
            <div className="border-b-5 border-fullwayRed mb-[1.5rem] w-[8.2rem] " />

            <p className="font-[300] md:mb-[2.25rem] mb-[1.5rem] text-[1.25rem] ">
              Our manufacturing facility is the heart of our operation. Here,
              our passion for excellence is transformed into tangible products.
            </p>

            <p className="font-[300] text-[1.25rem] ">
              We use sustainable practices and cutting-edge technology to create
              tires that are not only high-performing but also environmentally
              conscious.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFactory;
