import { Button } from "@/components/ui/button";
import React from "react";

type ButtonSkewProps = {
  text?: String;
  component?: React.ReactNode;
  style?: String;
};

const ButtonSkew = ({ text, component, style }: ButtonSkewProps) => {
  return (
    <Button
      className={`rounded-none border bg-transparent border-white text-white skew-x-[-15deg] hover:bg-white hover:text-black transition ${style}`}
    >
      {text ? text: component}
    </Button>
  );
};

export default ButtonSkew;
