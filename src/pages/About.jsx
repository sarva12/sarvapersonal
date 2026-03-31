import { MapPin, BookOpen, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import './About.css'

function About() {
  return (
    <div className="about-container container section-padding animate-fade-in">
      <motion.div 
        className="about-header text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">About <span className="gradient-text">Me</span></h1>
        <p className="subtitle">My background, my story, and what drives me forward.</p>
      </motion.div>

      <div className="about-grid">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/assets/georgia_suwanee.png" 
            alt="Suwanee, Georgia - My Hometown" 
            className="about-image"
          />
          <div className="location-badge glass-card">
            <MapPin size={20} className="text-secondary" />
            <span>Suwanee, Georgia</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="about-card glass-card">
            <div className="card-header">
              <BookOpen size={24} className="text-primary" />
              <h3>Who Am I?</h3>
            </div>
            <p>
              I am Sarvajith Kujuluva, a highly motivated <strong>Computer Engineering</strong> major at the 
              Georgia Institute of Technology with an impeccable 4.0 GPA. My academic journey is deeply rooted in 
              the "Computer Hardware & Emerging Architecture" and "Systems & Architecture" threads. I am a builder at heart, 
              fascinated by how microscopic transistors scale into the complex, powerful machines that run our world. 
              Currently, I'm diving deep into ASIC design, system-level architecture, and bringing ideas to life through 
              hardware methodologies.
            </p>
          </div>

          <div className="about-card glass-card">
            <div className="card-header">
              <MapPin size={24} className="text-primary" />
              <h3>Where am I from?</h3>
            </div>
            <p>
              I proudly call <strong>Suwanee, Georgia</strong> my hometown. Growing up in a rapidly developing suburban landscape, 
              I was constantly exposed to the intersection of community growth and technological dependency. Suwanee instilled in me a quiet 
              determination and a collaborative spirit. The supportive environment shaped me into an adaptable problem-solver, ultimately leading 
              me to the Georgia Institute of Technology, where the vibrant, fast-paced atmosphere feels like a natural progression of 
              my childhood curiosities.
            </p>
          </div>

          <div className="about-card glass-card">
            <div className="card-header">
              <Heart size={24} className="text-primary" />
              <h3>Interests & Passions</h3>
            </div>
            <p>
              Beyond the classroom and the soldering station, I am deeply passionate about knowledge sharing and community engagement. 
              As a Peer Instructor at the Hive Makerspace, I actively train users on extensive hardware builds. Moreover, I am keen on 
              sustainable tech solutions, having interests closely aligned with the Energy Club. In my free time, I enjoy participating in 
              Outdoor Recreation Georgia Tech (ORGT) and exploring the tech startup scene.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
