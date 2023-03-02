const AddNewExpense = () => {
  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-mds shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-3xl">
        <div className="my-6">
          <h2 className="ml-12 text-lg font-semibold tracking-wider">
            Add Transactions
          </h2>
          <hr className="mt-4" />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center gap-y-4 mx-auto">
          <div className="col-span-1 h-16 border mx-4 rounded-md">
            <span className="text-xs pl-4 text-gray-500 tracking-wide">
              Wallet
            </span>
          </div>
          <div className="col-span-1 h-16 border mx-4 rounded-md">
            <span className="text-xs pl-4 text-gray-500 tracking-wide">
              Category
            </span>
          </div>
          <div className="col-span-1 h-16 border mx-4 rounded-md relative">
            <span className="text-xs pl-4 text-gray-500 tracking-wide">
              Amount
            </span>
            <input
              className="absolute left-0 w-full h-full"
              type="number"
              name=""
              id=""
            />
          </div>
          <div className="col-span-1 h-16 border mx-4 rounded-md">
            <span className="text-xs pl-4 text-gray-500 tracking-wide">
              Date
            </span>
          </div>
          <div className="col-span-2 h-16 border mx-4 rounded-md">
            <span className="text-xs pl-4 text-gray-500 tracking-wide">
              Note
            </span>
          </div>
        </div>
        <div className="w-11/12 my-6 flex justify-end mx-auto">
          <button className="w-28 h-12 bg-gray-100 text-light-green uppercase text-sm font-semibold">
            Cancel
          </button>
          <button className="w-28 h-12 bg-gray-100 uppercase text-sm font-semibold mx-4">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNewExpense;
