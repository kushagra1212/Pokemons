export const Search = () => {
  return (
    <div className="w-3/5 self-center">
      <form className="ml-0 flex">
        <input
          className="rounded-l-lg outline-none w-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Search Pokemon"
        />
        <button className="sm:px-0 md:px-8 rounded-r-lg bg-yellow-400 hover:bg-blue-500 hover:text-white hover:border-opacity-0  text-gray-800 font-bold sm:p-2 md:p-4 uppercase border-yellow-500 border-t border-b border-r transition duration-500 ease-in-out transform hover:-translate-y-.2 hover:scale-110">
          Search
        </button>
      </form>
    </div>
  );
};
