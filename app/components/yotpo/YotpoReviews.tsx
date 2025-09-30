"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import YotpoScript from "./YotpoScript";
import { useYotpoInit } from "@/hooks/useYotpoInit";


type ProductReviewsProps = {
  yotpo_review_count: number;
  id: number;
};

export function YotpoReviews({ yotpo_review_count, id }: ProductReviewsProps) {
  const [open, setOpen] = useState(false);

  useYotpoInit(open, id);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        <Button>
          <div className="underline cursor-pointer">
            <span>{yotpo_review_count}</span>
          </div>
        </Button>
      </DialogTrigger>

      {open && <YotpoScript />}

      <DialogContent className="mt-[1rem] h-full overflow-y-scroll sm:!max-w-[60rem]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <DialogClose className="hover:!text-transparent hover:!bg-transparent">
       
        </DialogClose>
        <div
          id="reviews-section"
          className="yotpo-widget-instance"
          data-yotpo-instance-id="774695"
          data-yotpo-product-id={id}
        />
      </DialogContent>
    </Dialog>
  );
}
