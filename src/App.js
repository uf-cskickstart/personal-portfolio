import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Footer from './components/Footer';

/* ==== Application Entry Point! ==== */
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* URL Routing: Associates components with paths */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/experience" element={<Experiences/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


