
import Image from "next/image"

interface PageBuilderMihoCardProps {
  title: string
  description: React.ReactNode
  imageSrc: string
  imageAlt: string
  imageHref: string
  buttonHref: string
  buttonLabel: string
}

const PageBuilderMihoCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageHref,
  buttonHref,
  buttonLabel,
}: PageBuilderMihoCardProps) => (
  <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-[1rem] p-[1.5rem] rounded-xl shadow-lg !bg-white">
    <div className="flex-shrink-0 rounded-xl overflow-hidden shadow-md w-full md:w-[12rem] h-[9rem] relative ">
      <a href={imageHref}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </a>
    </div>

    <div className="flex-1">
      <a href={imageHref} className="hover:underline">
        <h5 className="text-xl font-bold mb-[0.5]">{title}</h5>
      </a>
      <p className="text-gray-600">{description}</p>

      <div className="mt-[1rem] flex justify-center md:justify-start">
        <a
          href={buttonHref}
          className="bg-blue-600 text-white px-[1.25rem] py-[0.5rem] rounded-full hover:bg-blue-700 transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  </div>
)

export default PageBuilderMihoCard
