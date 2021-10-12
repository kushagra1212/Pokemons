import axios from "axios";
import Main from "../components/Main.js";

function Home({ pokemons }) {
  return <Main pokemons={pokemons} />;
}

export default Home;
export const getIndex = (index) => {
  const imageIndex = ("00" + (index + 1)).slice(-3);
  return imageIndex;
};

export const getImage = (index) => {
  const imageIndex = getIndex(index);
  const Image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageIndex}.png`;
  return Image;
};

export async function getServerSideProps() {
  let pokemons = [];
  try {
    const res = await axios.get(
      `${process.env.API_BASE_URL}/?limit=25&offset=0`
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
}
