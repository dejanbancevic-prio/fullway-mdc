import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactContant = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/HomePage/FeaturedTires/fullway-featuredtires-bg-image.jpg"
        alt="Fullway Logo"
        width={1920}
        height={1080}
        className="object-cover h-[71.25rem] md:h-[42.688rem] w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414]/95 to-[#141414]/95" />

      <div className="absolute inset-0 flex items-center ">
        <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row justify-between items-start gap-[2.12rem] md:gap-[0rem]">
          <div className="flex flex-col justify-start md:gap-[3.5rem] gap-[1.5rem] ">
            <Image
              src="/images/HomePage/FeaturedTires/Coin.svg"
              alt="Coin Icon"
              width={28}
              height={28}
              className="w-[4.875rem] h-auto "
            />

            <div className="flex flex-col gap-[1rem]">
              <p className="font-[800] text-[1.125rem] italic">ADDRESS</p>
              <p className="font-[300] text-[1.25rem] ">
                Street address, City, <br /> State, Country, ZIP Code
              </p>
            </div>

            <div className="flex flex-col gap-[1rem]">
              <p className="font-[800] text-[1.125rem] italic">PHONE</p>
              <p className="font-[300] text-[1.25rem]">+ 000 000 0000 000</p>
            </div>

            <div className="flex flex-col gap-[1rem]">
              <p className="font-[800] text-[1.125rem] italic">EMAIL</p>
              <p className="font-[300] text-[1.25rem] ">info@fullway.com</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactContant;
