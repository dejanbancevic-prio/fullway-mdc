import { JsonLd } from "@/lib/types";
import Script from "next/script";


type SchemaScriptProps = {
  id: string;
  schema: JsonLd;
  strategy?: "afterInteractive" | "beforeInteractive" | "lazyOnload";
};

const SchemaScript = ({
  id,
  schema,
  strategy = "afterInteractive",
}: SchemaScriptProps) => {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default SchemaScript;
