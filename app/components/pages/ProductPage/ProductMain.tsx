import ProdFeaturedTires from "./ProductFeaturedTires";
import Image from "next/image";
import ProductInfo from "./ProductInfo";
import ProductHeader from "./ProductHeader/ProductHeader";
import { ProductItem } from "@/lib/types";

type ProductMainProps = {
  product: ProductItem;
};

const ProductMain = ({ product }: ProductMainProps) => {
  return (
    <div className="w-full relative">
      <Image
        src="/images/ProductPage/prodBg.jpg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover h-[245rem] md:h-[147rem] w-full"
      />
      <div className="absolute md:inset-0 -top-[17rem] flex flex-col w-full mt-[17rem] md:mt-0 ">
        <div className="md:max-w-7xl md:mx-auto w-full flex flex-col gap-[4rem]">
          <div className="flex flex-col md:flex-row justify-between w-full gap-[9.5rem] md:gap-0">
            <div>
              <ProductHeader product={product} />
            </div>
          </div>

          {/* <div id="widget" className="scroll-mt-[8rem]">
            <Widget titleStyle="text-white" />
          </div> */}

          <div className="md:mb-[15rem] mb-[40rem]">
            <ProductInfo product={product} />
          </div>

          <ProdFeaturedTires />
        </div>
      </div>
    </div>
  );
};

export default ProductMain;
