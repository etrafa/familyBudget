import AddNewExpense from "./components/Modals/AddNewExpense";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CategoryModal from "./components/Modals/CategoryModal";

function App() {
  const [isAddNewExpenseModalOpen, setIsAddNewExpenseModalOpen] =
    useState(true);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  return (
    <Router>
      <div>
        <div className="flex">
          <Sidebar />
          <Navbar setIsAddNewExpenseModalOpen={setIsAddNewExpenseModalOpen} />
        </div>
        {isAddNewExpenseModalOpen && (
          <AddNewExpense
            setIsAddNewExpenseModalOpen={setIsAddNewExpenseModalOpen}
            setIsCategoryModalOpen={setIsCategoryModalOpen}
          />
        )}
        {/* <CategoryModal /> */}
      </div>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
