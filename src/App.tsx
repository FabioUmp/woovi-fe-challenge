import "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Selection from "./Selection";
import Qr from "./Qr";
import CreditCard from "./CreditCard";


const App = () => {

  return (
    <Router basename={"/"}>
        <Routes>
          <Route path="/" element={<Selection />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/credit-card" element={<CreditCard />} />
        </Routes>
    </Router>
  );
};

export default App