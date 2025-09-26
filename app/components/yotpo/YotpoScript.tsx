"use client";

import Script from "next/script";

export default function YotpoScript() {
  return (
    <Script
      src="https://cdn-widgetsrepository.yotpo.com/v1/loader/2DNEVlFV31FdT7UHO6piB2YpH5UYHS3h0rneSVLd"
      strategy="afterInteractive"
      onLoad={() => console.log("Yotpo script loaded")}
    />
  );
}
