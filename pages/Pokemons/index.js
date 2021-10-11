import { Search } from "../../components/Search/Search";
import axios from "axios";
import { Card } from "../../components/card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImage, getIndex } from "../index";
import Link from 'next/link';
import { useCallback, useState } from "react";
const LIMIT=25;
export const Pokemons = ({pokemons}) => {
 
   const [items,setItems]=useState(pokemons);
   const [offset,setOffSet]=useState(LIMIT);
   const [hasMore, setHasMore] = useState(true);
 
   const getMorePokemons = async () => {
     let newPokemons=null;
    if(offset==875){
      setHasMore(false);
      return;
    }
    
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${offset}`);
  
      newPokemons = res.data?.results.map((poke, index) => {
    
        return { ...poke, image: getImage(index+offset),id:index+1+offset};
      });
  
    
    } catch (err) {
       console.log(err);
    }
    setOffSet(offset+LIMIT);
  
     setItems((item) => [...item, ...newPokemons]);
   };
  
   return (
     <>
       <InfiniteScroll
         dataLength={items.length}
         next={getMorePokemons}
         hasMore={hasMore}
         loader={<div className="animate-spin"> </div>}
         endMessage={<h4>Nothing more to show</h4>}
         className="flex flex-wrap content-center justify-center mt-14"
       >
         {items?.map((pokemon,index) => (
    <Link href={`/Pokemons/${pokemon.id}`}  key={index} >

 <a>
 <Card pokemon={pokemon} />

 </a>
    </Link>
         ))}
       </InfiniteScroll>
      
     </>
   );
};





