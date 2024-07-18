type BodyProps = {
  title: string;
};

function Body({ title }: BodyProps) {
  return (
    <div className="mx-auto text-gray-900 text-xl bg-white border border-gray-200 rounded-lg dark:border-gray-500 ">
      <a
        href="#"
        className="block w-full h-20 px-4 py-2 rounded-t-lg  hover:bg-gray-100 focus:outline-none focus:ring-2  dark:border-gray-600 dark:hover:bg-green-50 dark:hover:text-black dark:focus:ring-green-500 "
      >
        <span className="text-gray-700 font-bold">2x</span> R$ 15.300,00
        <p className="text-gray-400 text-sm font-light mt-2">
          Total: R$ 30.600,00
        </p>
      </a>
      <a
        href="#"
        className="block w-full h-20 px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2  dark:border-gray-600 dark:hover:bg-green-50 dark:hover:text-black dark:focus:ring-green-500"
      >
        <span className="text-gray-700 font-bold">3x</span> R$ 10.196,66
        <p className="text-gray-400 text-sm font-light mt-2">
          Total: R$ 30.620,00
        </p>
      </a>
      <a
        href="#"
        className="block w-full h-20 px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100  focus:outline-none focus:ring-2  dark:border-gray-600 dark:hover:bg-green-50 dark:hover:text-black dark:focus:ring-green-500 "
      >
        <span className="text-gray-700 font-bold">4x</span> R$ 7.725,00
        <p className="text-gray-400 text-sm font-light mt-2">
          Total: R$ 30.900,00
        </p>
      </a>
      <a
        href="#"
        className="block w-full h-20 px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2  dark:border-gray-600 dark:hover:bg-green-50 dark:hover:text-black dark:focus:ring-green-500 "
      >
        <span className="text-gray-700 font-bold">5x</span> R$ 6.300,00
        <p className="text-gray-400 text-sm font-light mt-2">
          Total: R$ 31.500,00
        </p>
      </a>
    </div>
  );
}

export default Body;
