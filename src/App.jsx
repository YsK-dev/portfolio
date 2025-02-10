import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIProjects from './pages/AIProjects';
import ElectronicProjects from './pages/ElectronicProjects';
import ProgrammingProjects from './pages/ProgrammingProjects';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AIProjects />} />
        <Route path="/electronic" element={<ElectronicProjects />} />
        <Route path="/programming" element={<ProgrammingProjects />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
export default App;



