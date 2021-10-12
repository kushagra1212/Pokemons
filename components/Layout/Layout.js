import Head from "next/head";
import { Footer } from "../footer/Footer.js";
import { Header } from "../header/Header.js";
export const Layout = ({
  children,
  title,
  pokemons,
  setSearchTextandPokemonsHandler,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex   h-screen">
        <Header
          pokemons={pokemons}
          setSearchTextandPokemonsHandler={setSearchTextandPokemonsHandler}
        />

        {children}

        <Footer />
      </div>
    </>
  );
};
