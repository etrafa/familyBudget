import { useState } from "react";
import { expensesCategories } from "../../categories/categories";

const Transactions = () => {
  const [activeMonth, setActiveMonth] = useState("thisMonth");

  return (
    <main className="w-full h-[91vh] bg-[#E4E4E4]">
      <div className="w-full max-w-xl min-h-[24rem] mx-auto bg-white shadow-md mt-12 rounded-lg">
        <header className="flex border-b pt-6 pb-2 justify-center gap-x-12">
          <h2
            onClick={() => setActiveMonth("lastMonth")}
            className={
              activeMonth === "lastMonth"
                ? "text-sm text-light-green font-medium tracking-wide cursor-pointer underline underline-offset-[10px] decoration-4 decoration-light-green"
                : "text-sm text-gray-500 font-medium tracking-wide cursor-pointer"
            }
          >
            LAST MONTH
          </h2>
          <h2
            onClick={() => setActiveMonth("thisMonth")}
            className={
              activeMonth === "thisMonth"
                ? "text-sm text-light-green font-medium tracking-wide cursor-pointer underline underline-offset-[10px] decoration-4 decoration-light-green"
                : "text-sm text-gray-500 font-medium tracking-wide cursor-pointer"
            }
          >
            THIS MONTH
          </h2>
        </header>
        <div className="mt-12 flex flex-col gap-y-4">
          <div className="flex justify-between mx-12">
            <span className="w-16 text-xs tracking-wider">Inflow</span>
            <span className="text-xs tracking-wider text-blue-500">
              +$ 1,200.00
            </span>
          </div>
          <div className="flex justify-between mx-12">
            <span className="w-16 text-xs tracking-wider">Outflow</span>
            <span className="text-xs tracking-wider text-red-500">$ 0</span>
          </div>
          <div className="flex flex-col mx-12">
            <hr className="w-full" />
            <span className="text-sm text-right pt-2 tracking-wider">
              +$ 1,200.00
            </span>
          </div>
        </div>
        <div className="w-full h-8 bg-gray-100 my-4"></div>
        <div className="">
          <div className="flex justify-between mx-12 border-b">
            <h4 className="text-sm px-2">March 03, 2023</h4>
            <span className="text-sm px-2 tracking-wide">+$ 1,200.00</span>
          </div>
          <div className="flex h-12 justify-between items-center px-12 mt-4 hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center">
              <img
                className="w-10 h-auto"
                src={expensesCategories[0].image}
                alt="expense icon"
              />
              <span className="w-6 pl-2 text-xs text-gray-600 font-bold tracking-widest">
                {expensesCategories[0].name}
              </span>
            </div>
            <span className="text-sm">- $123</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Transactions;
