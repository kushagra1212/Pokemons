import { useEffect } from "react";
export const DummyProfile=()=>{
        const pokemon={abilities:[{Ability:null}],height:null};
        useEffect(() => {
                window.scrollTo(0, 0)
              }, [])
        return(
                <div className="flex flex-col  mt-10 justify-around items-center h-screen">
                <div className="flex flex-wrap justify-start   my-8 ">
                  <img
                    className="bg-gray-100 w-96 h-64  rounded-lg shadow-md bg-cover bg-center animate-pulse"
                  
                  />
            
                  <div className="w-56 md:w-96 bg-white font-bold mt-10 ml-28 shadow-lg rounded-lg self-stretch transition duration-500 ease-in-out  ">
                    <div className="py-2 text-center font-extrabold md:text-4xl  hover:text-red-50 animate-pulse uppercase tracking-wide text-gray-800">
                      
                    </div>
                    <div className="flex items-center justify-between py-2 px-3 animate-pulse bg-gray-400">
                      <h1 className="text-gray-800 font-bold ">{pokemon.abilities.length}</h1>
                      <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 ">
                     
                      </button>
                    </div>
                    <div className="absolute animate-pulse -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                    <div className="absolute top-0 animate-pulse -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute animate-pulse -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="m-8 relative space-y-4">
                      {pokemon.abilities.map((Ability, index) => {
                        return <div key={index}  > </div>;
                      })}
                    </div>
                    <div className="flex animate-pulse items-center justify-between py-2 px-3 bg-indigo-500">
                      <h1 className="text-red-100 animate-pulse font-bold ">{pokemon.height}</h1>
                    <div className=" filter blur-xl">

                    <button className=" animate-pulse text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 " disabled>
                       Height
                      </button>
                    </div>
                    </div>
            
                  </div>
                 
                </div>
                <div className=" animate-pulse filter blur-sm">
                 <a className='w-24 text-center h-10 bg-blue-500 text-white rounded text-2xl font-bold overflow-visible justify-start transition duration-500 ease-in-out  '>Home</a>
         </div>
                 </div>
        )
}       