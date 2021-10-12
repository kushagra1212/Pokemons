export const Footer = () => {
  return (
    <div data-cy="footer" className="w-full flex justify-between  p-1 self-end  text-sm font-semibold text-purple-100 bg-gray-700 rounded-t-lg shadow-md  mt-20 fixed">
      <h1 className="text-indigo-300" >Pokemon Website </h1>
      <h4 className='text-gray-100' >Click on card to See Details</h4>
      <h4 className="text-gray-300" >API used: PokeApi</h4>
    </div>
  );
};
