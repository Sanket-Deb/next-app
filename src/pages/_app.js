import "@/styles/globals.css";
import "@/styles/variable.css";

import Toggle from "@/components/Toggle/Toggle";

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      {/* <Toggle/> */}
      <Component {...pageProps} />
    </main>
  )
}