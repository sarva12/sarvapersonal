import { Cpu, Layout, BatteryCharging } from 'lucide-react'
import { motion } from 'framer-motion'
import './Projects.css'

function Projects() {
  return (
    <div className="projects-container container section-padding animate-fade-in">
      <motion.div 
        className="projects-header text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Technical <span className="gradient-text">Projects</span></h1>
        <p className="subtitle">Showcasing my hands-on hardware and software development.</p>
      </motion.div>

      <div className="project-detail glass-card">
        <motion.div 
          className="project-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Featured Discovery Project
        </motion.div>
        
        <div className="project-header">
          <h2>DE-10 Lite FPGA Traffic Controller System</h2>
          <div className="tech-stack">
            <span>Verilog</span>
            <span>Intel Quartus</span>
            <span>FSM Logic</span>
            <span>DE-10 Lite FPGA</span>
          </div>
        </div>

        <div className="project-body">
          <div className="project-content">
            <p className="project-intro">
              For my primary ECE Discovery Project, I am executing the design, implementation, and verification of a digital traffic light controller using a DE-10 Lite FPGA development board. Based on the foundational concepts from the renowned 6.111 Introductory Digital Systems Laboratory MIT OpenCourseWare course, this project aims to bridge the gap between theoretical finite-state machine (FSM) concepts and practical, real-world hardware deployment. 
            </p>
            
            <p>
              The core objective is to learn the intricacies of FPGA programming by modeling a three-way intersection controller. The system manages the signal states for a main street, a side street, and pedestrian walk lamps. It strictly follows a predefined FSM that dictates timing intervals and guarantees safety conditions—such as ensuring no two perpendicular green signals overlap. Developing such logic involves a deep dive into Verilog hardware description language, structural timing, state encodings, and avoiding common pitfalls like metastability or race conditions across the flip-flops on the board.
            </p>
            
            <div className="project-goals-grid">
              <div className="p-goal">
                <Cpu size={24} className="text-secondary" />
                <h4>Hardware Emulation</h4>
                <p>Acquiring components from the Hive Makerspace and utilizing the ECE Instructional Labs to interface pushbuttons, LEDs, and switches with the Intel Quartus development environment.</p>
              </div>
              <div className="p-goal">
                <Layout size={24} className="text-primary" />
                <h4>FSM Architecture</h4>
                <p>Designing the state transition diagrams that manage normal operation, pedestrian interrupts, and emergency override states, ensuring predictable logic execution.</p>
              </div>
              <div className="p-goal">
                <BatteryCharging size={24} className="text-green" />
                <h4>Debugging & Validation</h4>
                <p>Utilizing waveform viewers and on-board diagnostic LEDs to verify state transitions in real-time, learning how to isolate and resolve timing violations.</p>
              </div>
            </div>

            <h3>Implementation Timeline & Execution</h3>
            <p>
              The execution of this Discovery Project is segmented over several progressive phases. The first phase focused entirely on hardware familiarity—collecting the DE-10 Lite from the lab, setting up the necessary toolchains, and executing preliminary tests to flash onboard LEDs. This seemingly simple step was crucial to navigating the interface of Intel Quartus and understanding the compilation and deployment processes onto the FPGA.
            </p>
            <p>
              In the subsequent weeks, the focus shifted strictly to architectural design. By following the MIT OCW lectures, I transitioned into writing fundamental modules in Verilog. This involved programming the combinational logic that dictates the traffic patterns and the sequential logic that tracks the internal state. The final and most rigorous phase is dedicated to extensive debugging. This step guarantees that the LED colors change precisely at the required intervals, effectively satisfying my stringent project completeness criteria as outlined in my initial project proposal. Overall, this hands-on project is not just a technical requirement; it represents a comprehensive leap in my understanding of Verilog and digital logic synthesis.
            </p>
          </div>
          
          <div className="project-media">
            <figure className="media-item">
              <img src="/assets/traffic_controller.png" alt="FPGA and Breadboard representing traffic lighting system" />
              <figcaption>The hardware setup: Intricate wiring for external LED emulation reflecting the internal FSM logic.</figcaption>
            </figure>
            <figure className="media-item">
              <img src="/assets/chip_design.png" alt="Digital logic and silicon processing overview" />
              <figcaption>Conceptual diagram of hardware logic compilation and design layout.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
