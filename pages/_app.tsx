import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="w-screen min-h-full">
        <Header />
        <Component {...pageProps} />
      </div>
  );
}