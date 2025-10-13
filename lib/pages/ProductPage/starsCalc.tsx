  import Image from "next/image";
  
  export const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const stars = [
      ...Array.from({ length: fullStars }).map((_, i) => (
        <Image
          key={`full-${i}`}
          src="/icons/other/Star1.svg"
          alt="Full Star"
          width={20}
          height={20}
          className="md:w-[1.25rem] md:h-[1.25rem] w-[0.8rem] h-[0.8rem]"
        />
      )),
    ];

    if (hasHalfStar) {
      stars.push(
        <Image
          key="half"
          src="/icons/other/MaskedStar.svg"
          alt="Half Star"
          width={20}
          height={20}
          className="md:w-[1.25rem] md:h-[1.25rem] w-[0.8rem] h-[0.8rem]"
        />
      );
    }

    return stars;
  };
