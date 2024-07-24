const List = () => {
  return (
    <div>
      <div className="col-span-2 my-4 border-b border-gray-300"></div>

      <div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="text-left">
            <div>CET: 0,5%</div>
          </div>

          <div className="grid grid-cols-1">
            <div className="text-right">
              <div>total: R$ 30.600,00</div>
            </div>
          </div>

          <div className="col-span-2 my-4 border-b border-gray-300"></div>

          <div className="text-left">
            <div>Como funciona?</div>
          </div>

          <div className="text-right">
            <div className="grid grid-cols-1">
              <div>^</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 my-4 border-b border-gray-300"></div>
    </div>
  );
};

export default List;
