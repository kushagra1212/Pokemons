export const DummyList = ({ Ability }) => {
  return (
    <>
      <div className="p-5 bg-white rounded-lg flex space-x-8">
        <div className=" grid grid-cols-2 ">
          <div className="h-5 min-w-1   bg-gray-100 rounded"></div>
          <div className="w-20 md:ml-10 h-6 text-white p-0 pl-4 font-bold rounded-lg bg-green-400"></div>
        </div>
      </div>

      <div className="p-5 bg-white rounded-lg flex space-x-8">
        <div className=" grid grid-cols-2 ">
          <div className="h-5 min-w-1   bg-gray-100 rounded"></div>
          <div className="w-20 md:ml-10 h-6 pl-4 font-bold   rounded-lg text-white bg-red-500"></div>
        </div>
      </div>
    </>
  );
};
