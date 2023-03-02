import AddNewExpense from "./components/Modals/AddNewExpense";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
      {/* <AddNewExpense /> */}
    </div>
  );
}

export default App;
