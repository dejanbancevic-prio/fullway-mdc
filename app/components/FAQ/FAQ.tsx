
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="relative w-full bg-fullwayGrey">
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] text-black pt-[3rem]">
        <div className="flex flex-col ">
          <p className="font-[400] text-[1.125rem] italic">HERE TO HELP YOU</p>

          <h2 className="md:font-[800] font-[700] md:text-[2.5rem] text-[2.25rem] italic leading-none md:leading-16">
            FREQUENTLY ASKED QUESTIONS - FAQ
          </h2>

          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
