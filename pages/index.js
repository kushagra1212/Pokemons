import axios from "axios";


import { Pokemons } from "./Pokemons";

export default function Home({ pokemons }) {
  return <Pokemons pokemons={pokemons} />;
}
export const getIndex = (index) => {
  const imageIndex = ("00" + (index + 1)).slice(-3);
  return imageIndex;
};
export const getImage = (index) => {
  const imageIndex = getIndex(index);
  const Image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageIndex}.png`;
  return Image;
};
export const getStaticProps = async () => {
  let pokemons = null;
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0"
    );

    const results = res.data?.results.map((poke, index) => {
      return { ...poke, image: getImage(index), id: index + 1 };
    });

    return {
      props: {
        pokemons: results,
      },
    };
  } catch (err) {
    pokemons = { error: { message: err.message } };
  }

  return {
    props: {
      pokemons,
    },
  };
};
