import { useState } from "react";
import {
  expensesCategories,
  incomeCategories,
} from "../../categories/categories";

const CategoryModal = () => {
  const [categoryType, setCategoryType] = useState("expense");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-50 z-50">
      <div className="absolute bg-white rounded-md shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-xl">
        <div className="mt-4">
          <h2 className="ml-12 text-lg font-semibold tracking-wider">
            Select Category
          </h2>
        </div>
        <form className="w-4/12 mt-4 mx-auto block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              className="block w-full h-10 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50"
              placeholder="Search"
            />
          </div>
        </form>
        <div className="flex justify-center gap-x-20 mt-4">
          <h4
            onClick={() => setCategoryType("expense")}
            className={
              categoryType === "expense"
                ? "text-sm underline underline-offset-8 decoration-[3px] decoration-light-green text-light-green font-medium cursor-pointer"
                : "text-sm text-gray-400 font-medium cursor-pointer"
            }
          >
            EXPENSE
          </h4>
          <h4
            onClick={() => setCategoryType("income")}
            className={
              categoryType === "income"
                ? "text-sm underline underline-offset-8 decoration-[3px] decoration-light-green text-light-green font-medium cursor-pointer"
                : "text-sm text-gray-400 font-medium cursor-pointer"
            }
          >
            INCOME
          </h4>
        </div>
        <hr className="w-full mt-1.5" />
        <div className="w-full h-96 overflow-y-scroll mt-4">
          <div className="w-9/12 mx-auto">
            {categoryType === "expense" ? (
              <>
                {expensesCategories
                  .filter((val) => {
                    if (searchTerm === "val") return val;
                    else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((category) => {
                    return (
                      <div className="flex w-full justify-start items-center py-2 hover:bg-gray-200 cursor-pointer border-b">
                        <img
                          className="w-10 h-10"
                          src={category.image}
                          alt={category.name}
                        />
                        <span className="w-32 text-sm pl-4">
                          {category.name}
                        </span>
                      </div>
                    );
                  })}
              </>
            ) : (
              <>
                {incomeCategories
                  .filter((val) => {
                    if (searchTerm === "val") return val;
                    else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((category) => {
                    return (
                      <div className="flex w-full justify-start items-center py-2 hover:bg-gray-200 cursor-pointer border-b">
                        <img
                          className="w-10 h-10"
                          src={category.image}
                          alt={category.name}
                        />
                        <span className="w-32 text-sm pl-4">
                          {category.name}
                        </span>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryModal;
