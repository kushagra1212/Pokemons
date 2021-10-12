import { useState } from "react";
import { SuggestionList } from "../List/SuggestionList";

export const Search = ({ pokemons, setSearchTextandPokemonsHandler }) => {

  const [Pokemons, setPokemons] = useState(pokemons);
  const [text, setText] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showList, setShowList] = useState(true);
  const onChangeHandler = (e) => {
    e.preventDefault();
    setShowList(true);

    let textCurrent = e.target.value;
    let filteredPokemonsCurrent = [];
    setText(textCurrent);

    if (textCurrent === "") {
      setFilteredPokemons([]);
      setActiveIndex(0);
      setSearchTextandPokemonsHandler(textCurrent, filteredPokemonsCurrent);
      return;
    }
    filteredPokemonsCurrent = Pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPokemons(filteredPokemonsCurrent);
    setSearchTextandPokemonsHandler(textCurrent, filteredPokemonsCurrent);
  };
  const onClickHandle = (index) => {
    setActiveIndex(index);
    setText(filteredPokemons[activeIndex].name);
    setSearchTextandPokemonsHandler(filteredPokemons[activeIndex].name, [
      filteredPokemons[activeIndex],
    ]);

    setShowList(false);
  };
  const keyDownHandler = (e) => {
    const { keyCode } = e;

    if (keyCode === 40) {
      if (activeIndex === Math.min(3, filteredPokemons.length)) return;
      let ActiveInd = Math.min(activeIndex + 1, 3);
      setActiveIndex(ActiveInd);
    } else if (keyCode === 38) {
      if (activeIndex === 0) return;

      setActiveIndex(activeIndex - 1);
    } else if (e.keyCode === 13) {
      setText(filteredPokemons[activeIndex].name);
      setSearchTextandPokemonsHandler(filteredPokemons[activeIndex].name, [
        filteredPokemons[activeIndex],
      ]);

      setShowList(false);
    }
  };

  return (
    <>
      <div   data-cy="search-input-div"  className="w-3/5 self-center">
        <div className="ml-0 flex">
          <input
        
            className="rounded-l-lg outline-none font-mono w-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="Search Pokemon"
            value={text}
            onChange={(e) => onChangeHandler(e)}
            onKeyDown={(e) => keyDownHandler(e)}
            data-cy="search-input"
          />

          <button
            className="sm:px-0 md:px-8 rounded-r-lg bg-yellow-400 hover:bg-blue-500 hover:text-white hover:border-opacity-0  text-gray-800 font-bold sm:p-2 md:p-4 uppercase border-yellow-500 border-t border-b border-r transition duration-500 ease-in-out transform hover:-translate-y-.2 hover:scale-110"
            onClick={() => setShowList(false)}
            data-cy="search-button"
          >
            Search
          </button>
        </div>
      </div>
      <div
        className="absolute  mt-14 -ml-44 w-96 max-h-60 
         overflow-hidden"
      >
        {showList &&
          filteredPokemons?.map((pokemon, index) => (
            <div
              onClick={() => onClickHandle(index)}
              key={index}
              className=" cursor-pointer shadow-lg transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-100   hover:text-white "
              data-cy="suggestion-list"
            >
              <SuggestionList
                name={pokemon.name}
                active={activeIndex === index}
              />
            </div>
          ))}
      </div>
    </>
  );
};
