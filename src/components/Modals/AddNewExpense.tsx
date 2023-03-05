import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface AddNewExpenseProps {
  setIsAddNewExpenseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCategoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewExpense = ({
  setIsAddNewExpenseModalOpen,
  setIsCategoryModalOpen,
}: AddNewExpenseProps) => {
  const [newExpenseInputs, setNewExpenseInputs] = useState({
    amount: 0,
    category: "Select a category",
    wallet: "",
    date: new Date().toLocaleDateString() || new Date(),
    note: "",
  });

  const [startDate, setStartDate] = useState(new Date());

  console.log(newExpenseInputs);

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
          <div
            onClick={() => setIsCategoryModalOpen(true)}
            className="col-span-1 h-16 border mx-4 rounded-md"
          >
            <span className="text-xs pl-4 text-gray-500 tracking-wide">
              Category
            </span>
            <div className="block ml-4 mt-1.5 text-base text-gray-400 tracking-wide">
              {newExpenseInputs.category === "Select a category" ? (
                <span>?</span>
              ) : null}

              <span className="pl-2">{newExpenseInputs.category}</span>
            </div>
          </div>
          <div className="col-span-1 h-16 border mx-4 rounded-md relative flex hover:border-gray-500">
            <label className="text-xs pl-4 pt-1 text-gray-500 tracking-wide w-full h-full">
              Amount
              <input
                onChange={(e) =>
                  setNewExpenseInputs({
                    ...newExpenseInputs,
                    amount: parseInt(e.target.value),
                  })
                }
                value={newExpenseInputs.amount}
                className="w-full h-full absolute left-0 bottom-0 -z-20 text-base text-black pt-4 px-4 focus:outline-none"
                type="number"
              />
            </label>
          </div>
          <div className="col-span-1 h-16 border mx-4 rounded-md relative flex hover:border-gray-500">
            <label className="text-xs pl-4 pt-1 text-gray-500 tracking-wide w-full h-full">
              Date
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date ? date : new Date());
                  setNewExpenseInputs({
                    ...newExpenseInputs,
                    date: date ? date.toLocaleDateString() : new Date(),
                  });
                }}
                className="w-full h-full mt-3 focus:outline-none"
                dateFormat="MM/dd/yyyy"
              />
            </label>
          </div>

          <div className="col-span-2 h-16 border mx-4 rounded-md relative flex hover:border-gray-500">
            <label className="text-xs pl-4 pt-1 text-gray-500 tracking-wide w-full h-full">
              Note
              <input
                onChange={(e) =>
                  setNewExpenseInputs({
                    ...newExpenseInputs,
                    note: e.target.value,
                  })
                }
                className="w-full h-full absolute left-0 bottom-0 -z-20 text-base text-black pt-4 px-4 focus:outline-none"
                type="text"
              />
            </label>
          </div>
        </div>
        <div className="w-11/12 my-6 flex justify-end mx-auto">
          <button
            onClick={() => setIsAddNewExpenseModalOpen(false)}
            className="w-28 h-12 bg-gray-100 text-light-green uppercase text-sm font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => console.log(newExpenseInputs)}
            className="w-28 h-12 bg-gray-100 uppercase text-sm font-semibold mx-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNewExpense;
