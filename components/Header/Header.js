import { Search } from "../Search/Search";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="w-screen  flex p-4 justify-center  text-sm font-semibold text-purple-100 bg-purple-600 shadow-md  h-20  fixed z-10 ">
      <Search />
    <Image  src="/pikachu.svg" alt="pikachu" height={100} width={100}/>
    </div>
  );
};
