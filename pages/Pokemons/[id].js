import axios from "axios";
import Image from "next/image";
import { List } from "../../components/List/List";
import Link from "next/link"
const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  console.log(pokemon.sprites.other.dream_world.front_default);
  return (
    <div className="flex flex-wrap justify-center   my-8">
      <img
        className="bg-gray-100 w-96 h-64 rounded-lg shadow-md bg-cover bg-center"
        src={pokemon.sprites.other.dream_world.front_default}
      />

      <div className="w-56 md:w-96 bg-white mt-10 ml-28 shadow-lg rounded-lg self-stretch ">
        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          {pokemon.species.name}
        </div>
        <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
          <h1 className="text-gray-800 font-bold ">{pokemon.abilities.length}</h1>
          <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 ">
           Abilities
          </button>
        </div>
        <div className="absolute -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          {pokemon.abilities.map((Ability, index) => {
            return <List key={index} Ability={Ability} />;
          })}
        </div>
        <div className="flex items-center justify-between py-2 px-3 bg-indigo-500">
          <h1 className="text-red-100 font-bold ">{pokemon.height}</h1>
          <button className="  text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 ">
           Height
          </button>
        </div>

      </div>
      <Link href="/">
      <a className='relative bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-visible'>Home</a>
      </Link>
    </div>
  );
};

export default Pokemon;
export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  let pokemon = null;
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const results = res.data;
    console.log(res);

    return {
      props: {
        pokemon: results,
      },
    };
  } catch (err) {
    pokemon = { error: { message: err.message } };
  }

  return {
    props: {
      pokemon,
    },
  };
};
