import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

function Home() {
  return (
    <div className="home-container container section-padding animate-fade-in">
      <div className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="greeting">
            <span className="badge">Welcome to my ePortfolio</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sarvajith Kujuluva</span>. <br />
            An Aspiring Computer Engineer.
          </h1>
          
          <div className="hero-description text-primary">
            <p className="summary-text">
              I am currently an undergraduate student at the Georgia Institute of Technology, pursuing a Bachelor of Science in Computer Engineering. My focus areas include Computer Hardware, Emerging Architectures, and Systems, specifically drawn toward AI and chip design. Through hands-on experiences, from the Hive Makerspace to developing ASIC designs with SiliconJackets, I am discovering where my passion intersects with real-world technological challenges.
            </p>
            
            <div className="vision-statement glass-card">
              <h3>My Vision</h3>
              <p>
                This ePortfolio serves as a professional networking tool and a comprehensive narrative of my academic journey. It showcases my technical projects, including my hardware logic endeavors and AI testing experiences. Furthermore, it details my long-term career aspirations to become an entrepreneur and a master of my field, seamlessly connecting my classroom foundations with innovative problem-solving.
              </p>
            </div>
            
            <figure className="quote-box">
              <blockquote>
                "The people who are crazy enough to think they can change the world are the ones who do."
              </blockquote>
              <figcaption>— Steve Jobs</figcaption>
            </figure>
          </div>

          <div className="hero-cta">
            <Link to="/about" className="btn-primary">
              Learn More About Me <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/projects" className="btn-secondary">
              View My Projects
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/assets/hero_workspace.png" 
            alt="My modern workspace as a computer engineering student" 
            className="hero-image"
          />
          <div className="image-backdrop gradient-glow"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
