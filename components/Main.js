import axios from "axios";
import { Card } from "./card/Card.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImage } from "../pages/index";
import { useRouter } from 'next/router'
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Layout } from "./layout/Layout";
import { DummyProfile } from "../animations/dummyComponnents/DummyProfile";
import { FilteredPokemonsComponent } from "./filteredPokemons/FilteredPokemonsComponent";

const LIMIT = 25;

export default function  Pokemons ({pokemons})  {

  const router=useRouter();

  const [items, setItems] = useState(pokemons);
  const [offset, setOffSet] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [count,setCount]=useState()
  const [searchText, setSearchText] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const start = () => {
  
    setLoading(true);
  };
  const end = () => {
    
    setLoading(false);
  };

  const setSearchTextandPokemonsHandler = (text, filteredPokemons) => {
    setSearchText(text);
    setFilteredPokemons(filteredPokemons);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    window.onbeforeunload = function(e) {
      router.beforePopState();
    };
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };

  }, []);

  if (searchText != "") {

    let length = filteredPokemons.length;
    if (length > 0) {
      return (
        <Layout
          title="Pokemons"
          pokemons={pokemons}
          setSearchTextandPokemonsHandler={setSearchTextandPokemonsHandler}
        >
        <FilteredPokemonsComponent filteredPokemons={filteredPokemons} />
        </Layout>
      );
    } else {
      return (
        <Layout
          title="Pokemons"
          pokemons={pokemons}
          setSearchTextandPokemonsHandler={setSearchTextandPokemonsHandler}
        >
          <div className="flex flex-wrap content-center justify-center items-center w-full mt-14">
            <h2 className="text-center opacity-80">NO POKEMON FOUND !</h2>
          </div>
        </Layout>
      );
    }
  }
  if (loading) {
    return <DummyProfile />;
  }

  const getMorePokemons = async () => {
    let newPokemons = null;
    if (offset == 875) {
      setHasMore(false);
      return;
    }

    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/?limit=${LIMIT}&offset=${offset}`
      );

      newPokemons = res.data?.results.map((poke, index) => {
        return {
          ...poke,
          image: getImage(index + offset),
          id: index + 1 + offset,
        };
      });
    } catch (err) {
      console.log(err);
    }
    setOffSet(offset + LIMIT);

    setItems((item) => [...item, ...newPokemons]);
  };

  return (
    <Layout
      title="Pokemons"
      pokemons={pokemons}
      setSearchTextandPokemonsHandler={setSearchTextandPokemonsHandler}
    >
      <InfiniteScroll
        dataLength={items.length}
        next={getMorePokemons}
        hasMore={hasMore}
        loader={<div className="animate-spin z-10"> </div>}
        endMessage={
          <div className="bg-gray-800 flex items-center justify-center  h-10 rounded-md  z-10 w-full text-white">
            <div className="  font-bold font-sans  ">You have Seen it All</div>
          </div>
        }
        className="flex flex-wrap content-center justify-center mt-14"
      
      >
        {items?.map((pokemon, index) => (
          <Link href={`/Pokemons/${pokemon.id}`} key={index}>
            <a>
              <Card pokemon={pokemon} />
            </a>
          </Link>
        ))}
      </InfiniteScroll>
    </Layout>
  );
};
