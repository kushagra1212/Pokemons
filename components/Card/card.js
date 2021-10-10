export const  Card=({pokemon})=>{
        const {name,image}=pokemon;

        return(
     
             <div className="bg-gray-200   mt-10 ml-5 mr-5">
      
             <div className="max-w-sm bg-white border-2  border-gray-300 p-6 rounded-md tracking-wide shadow-lg transition duration-500 ease-in-out  hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 cursor-pointer  hover:text-white">
                <div id="header" className="flex items-center mb-4"> 
                   <img alt="avatar" className="w-20 rounded-full border-2 border-gray-300" src={image} />
                   <div id="header-text" className="leading-5 ml-6 sm">
                      <h4 id="name" className="text-base      font-semibold">{name}</h4>
                 
                   </div>
              
                </div>
            
             </div>
           
             </div>
        )
}