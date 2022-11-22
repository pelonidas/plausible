import "../styles/globals.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      scriptProps={{
        src: "plausible.braveriver-f8c1afc3.northeurope.azurecontainerapps.io",
      }}
      domain="https://plausible-pi.vercel.app/"
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
