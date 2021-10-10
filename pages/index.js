import axios from "axios";
import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import { Pokemons } from "./Pokemons";

export default function Home({ pokemons }) {
  return (
    <Layout title="Pokemons">
      <Pokemons pokemons={pokemons} />
    </Layout>
  );
}

const getImage = (index) => {
  const imageIndex = ("00" + (index + 1)).slice(-3);
  const Image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageIndex}.png`;
  return Image;
};
export async function getStaticProps() {
  let pokemons = [];
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10");

    const results = res.data?.results.map((poke, index) => {
      return { ...poke, image: getImage(index) };
    });

    return {
      props: {
        pokemons: results,
      },
    };
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      pokemons,
    },
  };
}
