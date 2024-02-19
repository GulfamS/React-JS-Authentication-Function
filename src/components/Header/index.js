import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="navbar">
      <li className="nav-items">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-items">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
