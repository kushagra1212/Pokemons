import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <div className="w-100 flex  justify-between  p-4  text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md  h-20 mt-1 m-5 content-center">
      <Search />
      <h1>POKEMONS</h1>
    </div>
  );
};
