import AddNewExpense from "./components/Modals/AddNewExpense";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CategoryModal from "./components/Modals/CategoryModal";
import { INewExpense } from "./Interfaces/INewExpense";

function App() {
  const [isAddNewExpenseModalOpen, setIsAddNewExpenseModalOpen] =
    useState(true);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const [newExpenseInputs, setNewExpenseInputs] = useState<INewExpense>({
    amount: 0,
    category: {
      name: "Select a category",
      image: "",
    },
    wallet: "",
    date: new Date().toLocaleDateString() || new Date(),
    note: "",
  });

  return (
    <Router>
      <div>
        <div className="flex">
          <Sidebar />
          <Navbar setIsAddNewExpenseModalOpen={setIsAddNewExpenseModalOpen} />
        </div>
        {isAddNewExpenseModalOpen && (
          <AddNewExpense
            newExpenseInputs={newExpenseInputs}
            setNewExpenseInputs={setNewExpenseInputs}
            setIsAddNewExpenseModalOpen={setIsAddNewExpenseModalOpen}
            setIsCategoryModalOpen={setIsCategoryModalOpen}
          />
        )}
        {/* {isCategoryModalOpen && <CategoryModal />} */}
      </div>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
