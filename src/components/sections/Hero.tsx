import { motion } from 'framer-motion';
import './../../assets/styles/hero.scss';
import profilePic from './../../assets/images/ulll.png'; // Adjust path as needed

const Hero = () => {
  return (
    <section id= "hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-content"
          >
            <h1>Krishna Rauniyar</h1>
            <h2>AI/ML Engineer</h2>
            <p>
              I'm a software engineer with a passion for AI and ML. My work focuses on developing 
              innovative applications that leverage advanced algorithms and computational techniques 
              to solve complex problems, including those related to drug discovery and protein analysis. 
              With a strong foundation in AI/ML, GenAI, NLP, DNN, GNN, RNN, I'm dedicated to pushing 
              the boundaries of technology and applying these tools to real-world challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-image"
          >
            <div className="profile-circle">
              <img 
                src={profilePic} 
                alt="Krishna Rauniyar" 
                className="profile-picture"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;