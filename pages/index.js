import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import { Pokemon } from "./Pokemons";

export default function Home() {
  return (
    <Layout title="Home">
      <Pokemon />
    </Layout>
  );
}
