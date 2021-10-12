import Link from "next/link";
import { Card } from "../Card/Card.js";
export const FilteredPokemonsComponent=({filteredPokemons})=>{
        return (
                <div data-cy="pokemon-name-in-list" className="flex flex-wrap content-center justify-center mt-14">
                {filteredPokemons?.map((pokemon, index) => (
                  <Link href={`/Pokemons/${pokemon.id}`} key={index}>
                    <a>
                      <Card pokemon={pokemon} />
                    </a>
                  </Link>
                ))}
              </div>
        )
}