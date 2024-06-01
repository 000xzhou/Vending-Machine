import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Carrots from "./components/Carrots";
import Corns from "./components/Corns";
import Potatos from "./components/Potatos";

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
