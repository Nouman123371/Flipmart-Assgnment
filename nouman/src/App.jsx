import './App.css';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

function App() {
   return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/page2">About Us</Link> |{" "}
        <Link to="/page3">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
