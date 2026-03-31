import { Code, Globe, Mail } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer section-padding container">
      <div className="footer-content glass-card">
        <div className="footer-info">
          <h3>Sarvajith Kujuluva</h3>
          <p>Computer Engineering @ Georgia Tech</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://linkedin.com/in/sarvajith-kujuluva" target="_blank" rel="noreferrer" className="social-icon">
            <Globe size={20} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="social-icon">
            <Code size={20} />
          </a>
          <a href="mailto:skujuluva3@gatech.edu" className="social-icon">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sarvajith Kujuluva. ECE 1100 ePortfolio Assignment.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
