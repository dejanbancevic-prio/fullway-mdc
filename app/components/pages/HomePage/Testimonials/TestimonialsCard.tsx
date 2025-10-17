import Image from "next/image";

type TestimonialsCardProps = {
  stars: number;
  title: string;
  text: string;
  author: string;
  initials: string;
  date: string;
};

const TestimonialsCard = ({
  stars,
  title,
  text,
  author,
  initials,
  date,
}: TestimonialsCardProps) => {
  return (
    <div className="w-full max-w-[24.8125rem] h-[17.75rem] bg-white px-[2.25rem] py-[2rem] shadow-md mt-[1rem] flex flex-col justify-between ">
      <div className="flex flex-col gap-[1rem]">
        <div className="flex gap-1 ">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/icons/other/starRed.svg"
              alt="star"
              width={18}
              height={18}
              className={i < stars ? "opacity-100" : "opacity-30"}
            />
          ))}
        </div>

        <p className="italic font-[400] text-[#141414]">{title}</p>

        <p className="text-[#282828] text-[0.95rem] leading-relaxed">{text}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#E0E0E0] text-sm font-semibold text-[#282828]">
            {initials}
          </div>
          <span className="font-[400] text-[#282828]">{author}</span>
        </div>
        <span className="text-[#4F4F4F] text-sm">{date}</span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
