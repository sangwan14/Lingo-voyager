import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "../theme-provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Head>
        <title>Lingo Voyager</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
