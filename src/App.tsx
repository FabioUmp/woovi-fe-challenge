import 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Selection from './pages/Selection';
import Qr from './pages/Qr';
import CreditCard from './pages/CreditCard';

const App = () => {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/qr/:uuid" element={<Qr />} />
        <Route path="/credit-card" element={<CreditCard />} />
      </Routes>
    </Router>
  );
};

export default App;
