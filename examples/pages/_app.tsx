import "@neuralbertatech/ui/style.css";
import "highlight.js/styles/hybrid.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
