export const DummySearch = () => {
        return (
          <div className="w-3/5 self-center">
            <form className="ml-0 flex">
              <input
                className="rounded-l-lg filter blur-sm outline-none w-full  p-4 border-t mr-0 border-b border-l text-gray-800 animate-pulse border-gray-200 bg-white"
                placeholder="Search Pokemon"
              />
              <button className="sm:px-0 md:px-8 animate-pulse rounded-r-lg bg-yellow-400 hover:text-white border-opacity-0   filter blur-sm ani text-gray-800 font-bold sm:p-2 md:p-4 uppercase border-yellow-500 border-t border-b border-r ">
                Search
              </button>
            </form>
          </div>
        );
      };
      