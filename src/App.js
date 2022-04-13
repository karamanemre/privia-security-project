import { useLocation } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {/* {(pathname !== "/" && pathname !== "/resources") && <Navbar />} */}
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
