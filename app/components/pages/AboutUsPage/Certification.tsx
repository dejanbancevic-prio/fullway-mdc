import BadgeMotion from "./BadgeMotion";

const Certification = () => {
  return (
    <div className="flex w-full bg-[#141414]">
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-[1.5rem] md:py-[3rem] py-[1.5rem]">
          <div>
            <h2 className="font-[700] text-[2.25rem] leading-none italic">
              OUR CERTIFICATION
            </h2>
            <div className="border-b-5 border-fullwayRed w-[5rem] ml-[0.25rem]" />
          </div>

          <div className="flex flex-col font-[300] text-[1.25rem] gap-[1.5rem] max-w-[53rem]">
            <p>
              Our team of experts is certified and trained to the highest
              standards. We don&apos;t just rely on our years of experience—we also
              invest in professional development and rigorous training programs.
            </p>
            <p>
              This commitment ensures that every tire we produce meets and
              exceeds industry benchmarks for safety and quality. Our processes
              are regularly audited to maintain these standards.
            </p>
          </div>
        </div>

        <BadgeMotion />
      </div>
    </div>
  );
};

export default Certification;
