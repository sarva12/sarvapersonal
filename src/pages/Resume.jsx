import { Download, Briefcase, GraduationCap, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import './Resume.css'

function Resume() {
  return (
    <div className="resume-container container section-padding animate-fade-in">
      <motion.div 
        className="resume-header text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">My <span className="gradient-text">Resume</span></h1>
        <p className="subtitle">An overview of my education, experience, and technical skills.</p>
        <div style={{ marginTop: '24px' }}>
          <a href="/resume.pdf" download className="btn-primary">
            <Download size={18} style={{ marginRight: '8px' }} /> Download PDF Version
          </a>
        </div>
      </motion.div>

      <div className="resume-content">
        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-header">
            <GraduationCap className="text-secondary" size={28} />
            <h2>Education</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h3>Georgia Institute of Technology</h3>
              <p className="timeline-date">Expected May 2027 | Atlanta, GA</p>
              <p>
                <strong>Bachelor of Science in Computer Engineering</strong> <br/>
                <strong>GPA:</strong> 4.00 <br/>
                <strong>Threads:</strong> Computer Hardware & Emerging Architecture + Systems & Architecture
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="section-header">
            <Briefcase className="text-secondary" size={28} />
            <h2>Experience</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h3>SiliconJackets ASIC Design Team</h3>
              <p className="timeline-date">August 2025 – Present</p>
              <ul>
                <li>Built a 64-bit calculator in SystemVerilog using cascaded 32-bit adders, a seven-state FSM, and memory-mapped SRAM I/O.</li>
                <li>Verified cycle using Cadence Xcelium and analyzed timing behavior via SimVision.</li>
                <li>Built UVM-style SystemVerilog environment and achieved 99.96% DUT coverage in Verdi with constrained-random tests.</li>
                <li>Executed RTL-to-GDSII flow for 32-bit adder in Cadence Innovus.</li>
              </ul>
            </div>

            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h3>Hive Makerspace Peer Instructor</h3>
              <p className="timeline-date">August 2025 – Present</p>
              <ul>
                <li>Trained and supported a makerspace with 2,000+ members through end-to-end hardware builds.</li>
                <li>Helped troubleshoot circuit and system-level issues quickly using lab equipment (oscilloscopes, DMMs).</li>
              </ul>
            </div>

            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h3>Apago, Inc., Electrical Engineering Intern</h3>
              <p className="timeline-date">May 2025 – August 2025</p>
              <ul>
                <li>Designed control system testbed using oscilloscopes, multimeters, and benchtop tools for PCB/SMD soldering.</li>
                <li>Verified firmware and board bring-up, ensuring correct timing and connectivity between microcontroller and peripherals.</li>
              </ul>
            </div>
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <h3>Georgia Tech Invention Studio, Intern</h3>
              <p className="timeline-date">June 2024 – July 2024</p>
              <ul>
                <li>Achieved Certified Prototyping Instructor status by mastering 10+ fabrication tools.</li>
                <li>Designed custom PCBs for flight-control/telemetry systems using C/C++ on STM32 microcontrollers.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="section-header">
            <Code className="text-secondary" size={28} />
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card glass-card">
              <h4>Technical Skills</h4>
              <p>KiCAD, Verilog/SystemVerilog, C/C++, PCB Design, MATLAB, SPI/I2C/UART Communication, Linux, Git Bash, STM32, Python, Timing Analysis / STA.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
