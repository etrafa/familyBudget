import AddNewExpense from "./components/Modals/AddNewExpense";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CategoryModal from "./components/Modals/CategoryModal";
import { INewExpense } from "./Interfaces/INewExpense";
import WalletModal from "./components/Modals/WalletModal";
import Login from "./components/Login/Login";
import { ICurrency } from "./Interfaces/ICurrency";
import Dashboards from "./components/Dashboard/Dashboards";
import Transactions from "./components/Transactions/Transactions";

function App() {
  const [isAddNewExpenseModalOpen, setIsAddNewExpenseModalOpen] =
    useState(false);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const [newExpenseInputs, setNewExpenseInputs] = useState<INewExpense>({
    amount: 0,
    category: {
      name: "Select a category",
      image: "",
    },
    wallet: "",
    date: new Date().toLocaleDateString() || new Date(),
    note: "",
    type: "expense",
  });

  const [activeCurrency, setActiveCurrency] = useState<ICurrency>({
    currencyName: "",
    currencyIMG: "",
  });

  return (
    <Router>
      {/* <Login /> */}
      <div>
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar
              activeCurrency={activeCurrency}
              setActiveCurrency={setActiveCurrency}
              setIsAddNewExpenseModalOpen={setIsAddNewExpenseModalOpen}
            />
            <Routes>
              <Route path="/" element={<Dashboards />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>

        {/* MODALS */}

        {isAddNewExpenseModalOpen && (
          <AddNewExpense
            newExpenseInputs={newExpenseInputs}
            setNewExpenseInputs={setNewExpenseInputs}
            setIsAddNewExpenseModalOpen={setIsAddNewExpenseModalOpen}
            setIsWalletModalOpen={setIsWalletModalOpen}
            setIsCategoryModalOpen={setIsCategoryModalOpen}
          />
        )}
        {isCategoryModalOpen && (
          <CategoryModal
            newExpenseInputs={newExpenseInputs}
            setNewExpenseInputs={setNewExpenseInputs}
            setIsCategoryModalOpen={setIsCategoryModalOpen}
          />
        )}
        {isWalletModalOpen && (
          <WalletModal setIsWalletModalOpen={setIsWalletModalOpen} />
        )}
      </div>
    </Router>
  );
}

export default App;
