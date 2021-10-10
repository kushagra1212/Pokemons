export const Search = () => {
  return (
    <div className="w-screen">
      <form className="ml-0 flex">
        <input
          className="rounded-l-lg outline-none w-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Search Pokemon"
        />
        <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r ">
          Search
        </button>
      </form>
    </div>
  );
};
