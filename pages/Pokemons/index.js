import { Search } from "../../components/Search/Search";
import axios from "axios";
import { Card } from "../../components/card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImage } from "../index";

import { useCallback, useState } from "react";
const LIMIT=25;
export const Pokemons = ({pokemons}) => {
 
   const [items,setItems]=useState(pokemons);
   const [offset,setOffSet]=useState(LIMIT);
   const [hasMore, setHasMore] = useState(true);
 
   const getMorePokemons = async () => {
     let newPokemons=null;
    if(offset==1150){
      setHasMore(false);
      return;
    }
    
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${offset}`);
  
      newPokemons = res.data?.results.map((poke, index) => {
        console.log(poke);
        return { ...poke, image: getImage(index+offset) };
      });
  
    
    } catch (err) {
       console.log(err);
    }
    setOffSet(offset+LIMIT);
  
     setItems((item) => [...item, ...newPokemons]);
   };
   console.log(offset)
   return (
     <>
       <InfiniteScroll
         dataLength={items.length}
         next={getMorePokemons}
         hasMore={hasMore}
         loader={<h3> Loading...</h3>}
         endMessage={<h4>Nothing more to show</h4>}
         className="flex flex-wrap"
       >
         {items.map((pokemon,index) => (
         <Card pokemon={pokemon} key={index} />
         ))}
       </InfiniteScroll>
      
     </>
   );
};





