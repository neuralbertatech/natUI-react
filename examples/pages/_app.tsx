import "@neuralbertatech/ui/style.css";

import type { AppProps } from 'next/app';
import 'highlight.js/styles/hybrid.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
