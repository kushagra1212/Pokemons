import { Search } from "../Search/Search.js";

export const Header = ({ pokemons, setSearchTextandPokemonsHandler }) => {
  return (
    <div className="w-screen  flex p-4 justify-center  text-sm font-semibold text-purple-100 bg-purple-600 shadow-md  h-20  fixed z-10 ">
      <Search
        pokemons={pokemons}
        setSearchTextandPokemonsHandler={setSearchTextandPokemonsHandler}
      />
      <img src="/pikachu.svg" alt="pikachu" height={100} width={100} />
    </div>
  );
};
