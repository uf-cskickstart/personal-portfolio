import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import DisplayProject from './pages/DisplayProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/WiCSE-Personal-Project" element={<Home/>}></Route>
          <Route path="/WiCSE-Personal-Project/projects" element={<Projects/>}></Route>
          <Route path="/WiCSE-Personal-Project/experience" element={<Experiences/>}></Route>
          <Route path="/WiCSE-Personal-Project/displayproject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


