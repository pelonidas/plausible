import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          defer
          data-domain={"plausible-pi.vercel.app"}
          src="https://plausible.braveriver-f8c1afc3.northeurope.azurecontainerapps.io/js/plausible.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
