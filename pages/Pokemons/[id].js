import axios from "axios";
import Image from "next/image";
import { List } from "../../components/List/List";
import Link from "next/link"
import Router from "next/router";
import { useEffect,useState } from "react";
const Pokemon = ({ pokemon }) => {

  return (
    <div className="flex flex-col justify-around items-center h-screen">
    <div className="flex flex-wrap justify-start   my-8 ">
      <img
        className="bg-gray-100 w-96 h-64 rounded-lg shadow-md bg-cover bg-center transition duration-500 ease-in-out  hover:bg-gray-400 transform hover:-translate-y-1 hover:scale-110  hover:text-gray-900"
        src={pokemon.sprites.other.dream_world.front_default}
      />

      <div className="w-56 md:w-96 bg-white font-bold mt-10 ml-28 shadow-lg rounded-lg self-stretch transition duration-500 ease-in-out  hover:bg-gray-400 transform hover:-translate-y-1 hover:scale-110   hover:text-gray-900">
        <div className="py-2 text-center font-extrabold md:text-4xl  hover:text-red-50 uppercase tracking-wide text-gray-800">
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
     
    </div>
     <Link href="/">
     <a className='w-24 text-center h-10 bg-blue-500 text-white rounded text-2xl font-bold overflow-visible justify-start transition duration-500 ease-in-out  hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 cursor-pointer  hover:text-red-200'>Home</a>
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
