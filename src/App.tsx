import AddNewExpense from "./components/Modals/AddNewExpense";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAddNewExpenseModalOpen, setIsAddNewExpenseModalOpen] =
    useState(false);

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
          />
        )}
      </div>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
