export const List =({Ability})=>{
  const {ability,is_hidden}=Ability;
  
   return (
        <div className="p-5 bg-white rounded-lg flex space-x-8">
        <div className=" grid grid-cols-2 ">
          <div className="h-4  md:w-40  bg-gray-100 rounded">
              {ability.name}
          </div>
          {is_hidden?<div className="w-20 md:ml-10 h-6 text-white p-0 pl-4 font-bold rounded-lg bg-green-400">Hidden</div>:<div className="w-20 md:ml-10 h-6 pl-4 font-bold   rounded-lg text-white bg-red-500">Hidden</div>}
        </div>
      </div>
   )
}