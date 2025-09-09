import { Button } from "@/components/ui/button";
import React from "react";

type ButtonSkewProps = {
  text?: string;
  component?: React.ReactNode;
  style?: string;
  onClick?: () => void;
};

 // NOT IN USE AT THE MOMENT
const ButtonSkew = ({ text, component, style, onClick }: ButtonSkewProps) => {

  return (
    <Button
      className={`rounded-none border bg-transparent border-white text-white skew-x-[-15deg] hover:bg-white hover:text-black transition ${style}`}
      onClick={() => {onClick ?? null}}
    >
      {text ? text: component}
    </Button>
  );
};

export default ButtonSkew;
