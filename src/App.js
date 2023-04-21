import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import './style.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Help from './pages/Help/Help';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<RemountWrapper component={Home} />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

const RemountWrapper = ({ component: Component }) => {
  const location = useLocation();
  return <Component key={location.pathname} />;
};

export default App;
