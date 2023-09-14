
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/ContextProvider";


function App() {
  return (
    <ContextProvider>
      <div className="app">
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
    </ContextProvider>
  );
}

export default App;
