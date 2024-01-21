import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SpinPage from './components/SpinPage';
import Stores from './components/Stores';
import SpinFoodPage from './components/SpinFoodPage'

function App() {
  return (
    <Router>
      <div className = "Main">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spin" element={<SpinPage />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/spin-food" element={<SpinFoodPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
