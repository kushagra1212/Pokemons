export const SuggestionList = ({ name, active }) => {
  return (
    <>
      {active ? (
        <div className="p-5 m-1 bg-green-400  font-bold  hover:bg-blue-800 hover:text-red-50  text-white rounded-lg flex space-x-8">
          <div className=" grid grid-cols-2 ">
            <div className="h-5 min-w-1   rounded">{name}</div>
          </div>
        </div>
      ) : (
        <div className="p-5 text-gray-600 opacity-90 font-bold hover:bg-blue-800 hover:text-red-50 bg-gray-100 rounded-lg flex space-x-8">
          <div className=" grid grid-cols-2 ">
            <div className="h-5 min-w-1  rounded">{name}</div>
          </div>
        </div>
      )}
    </>
  );
};
