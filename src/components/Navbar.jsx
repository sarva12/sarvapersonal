import { Link, useLocation } from 'react-router-dom'
import { Code, User, FileText, Target, Zap } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar container">
      <Link to="/" className="nav-brand gradient-text">
        <span className="brand-logo">SK</span>
        Sarvajith Kujuluva
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          <User size={18} /> Home
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          <Target size={18} /> About
        </Link>
        <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>
          <FileText size={18} /> Resume
        </Link>
        <Link to="/goals" className={`nav-link ${location.pathname === '/goals' ? 'active' : ''}`}>
          <Zap size={18} /> Goals
        </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
          <Code size={18} /> Projects
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
