import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./pages/VendingMachine";
import Carrots from "./pages/Carrots";
import Corns from "./pages/Corns";
import Potatos from "./pages/Potatos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/carrot" element={<Carrots />} />
        <Route path="/corn" element={<Corns />} />
        <Route path="/potato" element={<Potatos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
