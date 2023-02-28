import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
