import { Link } from 'react-router-dom';
import '../Navbar.css'; // Create this file for Navbar styles

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ai">AI Projects</Link></li>
        <li><Link to="/electronic">Electronic&Robotic Projects</Link></li>
        <li><Link to="/programming">Programming Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;