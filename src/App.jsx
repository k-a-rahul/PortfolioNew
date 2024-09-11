import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <div className="overflow-hidden w-screen h-screen">
    <Navbar/>
    <Outlet />;
    </div>
    </>
  );
}

export default App;
