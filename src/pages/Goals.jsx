import { Flag, Target, Compass, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import './Goals.css'

function Goals() {
  return (
    <div className="goals-container container section-padding animate-fade-in">
      <motion.div 
        className="goals-header text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Career <span className="gradient-text">Goals</span></h1>
        <p className="subtitle">My strategic roadmap for academic and professional growth.</p>
      </motion.div>

      <div className="goals-grid">
        <motion.div 
          className="goal-column"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="goal-card glass-card">
            <div className="goal-icon">
              <Target size={32} className="text-primary" />
            </div>
            <h2>Short-Term Goals (1-2 Years)</h2>
            <p>
              My immediate focus is on building a robust foundation in both academic understanding and community involvement. Within the first two years, I aim to settle into key organizations like the Energy Club and SiliconJackets, while exploring various industry prospects to solidify my thread concentrations. 
            </p>
            <div className="action-steps">
              <h4>Actionable Steps:</h4>
              <ul>
                <li><strong>Explore Threads:</strong> Test the waters in "Computer Hardware & Emerging Architecture" to confirm alignment with industry trends.</li>
                <li><strong>Big Tech Internship:</strong> Secure a summer internship by refining a competitive, ATS-friendly resume and preparing for technical interviews.</li>
                <li><strong>Work-Life Balance:</strong> Establish a healthy routine that accommodates intense coursework alongside essential extracurriculars.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="goal-column"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="goal-card glass-card">
            <div className="goal-icon">
              <Compass size={32} className="text-secondary" />
            </div>
            <h2>Mid/Long-Term Goals (3-5 Years)</h2>
            <p>
              As I step into my upperclassman years, the focus shifts toward securing full-time employment and evaluating graduate school options. I want to expand my horizons outside of Georgia, ensuring that my post-graduation plans challenge me technically and culturally.
            </p>
            <div className="action-steps">
              <h4>Actionable Steps:</h4>
              <ul>
                <li><strong>Leadership:</strong> Assume a more significant instructional/leadership role within ORGT (Outdoor Recreation Georgia Tech).</li>
                <li><strong>Grad School Decision:</strong> Weigh the pros and cons of pursuing the BS/MS contiguous degree program versus joining the workforce immediately.</li>
                <li><strong>Full-Time Offer:</strong> Leverage my previous internships and research network to secure a full-time position outside of Georgia prior to graduation.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="goal-column full-width"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="goal-card glass-card visionary">
            <div className="visionary-content">
              <div className="visionary-text">
                <div className="goal-icon" style={{ margin: '0 0 24px 0'}}>
                  <Rocket size={32} className="text-primary" />
                </div>
                <h2>The 10-Year Vision</h2>
                <p>
                  Ultimately, within the next decade, I aspire to become a true master of my craft in the AI and chip design space. My ultimate ambition is to transition from a technical lead into an entrepreneurial role. I want to build systems that leave a lasting impact by establishing my own enterprise centered around hardware innovations and efficient energy solutions.
                </p>
              </div>
              <div className="visionary-image-wrapper">
                <img src="/assets/career_vision.png" alt="Futuristic abstract roadmap representation" className="visionary-image" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Goals
