import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRef } from "react";
import { ProductVariant } from "@lib/types";

type ProductInfoTableProps = {
  variants: ProductVariant[];
};

const ProductInfoTable = ({ variants }: ProductInfoTableProps) => {
  const lastScrollRef = useRef(0);
  return (
    <div className="h-[31rem] w-full overflow-y-auto ">
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow className="bg-fullwayRed hover:bg-fullwayRed border-none">
            <TableHead className="md:w-[20%] w-[60%] font-[800] text-white italic p-[1rem] text-center">
              SIZE
            </TableHead>
            <TableHead className="font-[800] w-[30%] md:hidden text-white italic p-[1rem] text-center">
              DETAILS
            </TableHead>

            <TableHead className="hidden md:table-cell font-[800] text-white italic text-center">
              LOAD INDEX
            </TableHead>
            <TableHead className="hidden md:table-cell font-[800] text-white italic text-center">
              SPEED <br /> RATING
            </TableHead>
            <TableHead className=" hidden md:table-cell font-[800] text-white italic text-center">
              UTQG
            </TableHead>
            <TableHead className="hidden md:table-cell font-[800] text-white italic text-center">
              RIM <br /> WIDTH (IN)
            </TableHead>
            <TableHead className=" hidden md:table-cell font-[800] text-white italic text-center">
              MAX <br /> PRESSURE <br /> (PSI)
            </TableHead>
            <TableHead className="hidden md:table-cell font-[800] text-white italic text-center">
              OVERALL <br /> DIAMETER <br /> (IN)
            </TableHead>
            <TableHead className="hidden md:table-cell font-[800] text-white italic text-center">
              TREAD <br /> DEPTH
            </TableHead>
            <TableHead className="w-[15%] hidden md:table-cell font-[800] text-white italic text-center">
              SIDEWALL
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {variants.map((variant, idx) => (
            <TableRow
              key={idx}
              className="border-none even:bg-[#1D1D1D] font-[800] text-white italic text-center"
            >
              <TableCell className="text-center ">{variant?.attributes?.[0]?.label ?? "N/A"}</TableCell>
              <TableCell className="md:hidden">
                <Drawer
                  onOpenChange={(open) => {
                    if (open) {
                      lastScrollRef.current = window.scrollY;
                      document.documentElement.style.scrollBehavior = "auto";
                    } else {
                      setTimeout(() => {
                        document.documentElement.style.scrollBehavior = "";
                        window.scrollTo({
                          top: lastScrollRef.current,
                          behavior: "auto",
                        });
                      }, 50);
                    }
                  }}
                >
                  <DrawerTrigger asChild>
                    <Button className="bg-transparent underline text-center font-[400] text-[0.75rem]">
                      Check it out
                    </Button>
                  </DrawerTrigger>

                  <DrawerContent className="p-6">
                    <DrawerHeader>
                      <DrawerTitle></DrawerTitle>
                    </DrawerHeader>

                    <div className="flex flex-col text-black text-[0.95rem] mb-[3rem]">
                      <div className="flex justify-between py-2 px-4 bg-white">
                        <p>Size</p>
                        <p className="italic font-bold w-20">
                          {variant?.attributes?.[0]?.label ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-gray-100">
                        <p>Load Index</p>
                        <p className="italic font-bold">
                          {variant?.product?.load_index_text ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-white">
                        <p>Speed Rating</p>
                        <p className="italic font-bold">
                          {variant?.product?.speed_rating ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-gray-100">
                        <p>UTQG</p>
                        <p className="italic font-bold">
                          {variant?.product?.utqg ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-white">
                        <p>Rim Width (in)</p>
                        <p className="italic font-bold">
                          {variant?.product?.rim_diameter_text ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-gray-100">
                        <p>Max Pressure (PSI)</p>
                        <p className="italic font-bold">
                          {variant?.product?.max_air_pressure ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-white">
                        <p>Overall Diameter (in)</p>
                        <p className="italic font-bold">
                          {variant?.product?.overall_diameter ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-gray-100">
                        <p>Tread Depth</p>
                        <p className="italic font-bold">
                          {variant?.product?.tread_depth_text ?? "N/A"}
                        </p>
                      </div>

                      <div className="flex justify-between py-2 px-4 bg-white">
                        <p>Sidewall</p>
                        <p className="italic font-bold">
                          {variant?.product?.sidewall_specifics_text ?? "N/A"}
                        </p>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </TableCell>

              <TableCell className="hidden md:table-cell">
                {variant?.product?.load_index_text ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.speed_rating ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.utqg ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.rim_diameter_text ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.max_air_pressure ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.overall_diameter ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.tread_depth_text ?? "N/A"}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {variant?.product?.sidewall_specifics_text ?? "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductInfoTable;
