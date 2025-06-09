import { motion } from 'framer-motion';
import './../../assets/styles/conference.scss';

const services = [
    {
    id: 1,
    title: 'Served as a Program Committee Member and Reviewer for the PEARC 2025 Conference',
    event: 'PEARC 2025 - Applications and Software'
  },
  {
    id: 2,
    title: 'Program Coordinator (“Sharing Travel Stories”) of Professional Development Avenue (PDA)',
    event: 'Rotaract Club of Kathmandu MidTown'
  },
  {
    id: 3,
    title: 'Associate Coordinator (“The Importance of Communication Skills for Youth”) of Professional Development Avenue (PDA)',
    event: 'Rotaract Club of Kathmandu Mid-Town'
  },
  {
    id: 4,
    title: 'Associate Coordinator (“The Importance of Planning and Strategy in Life”) of Professional Development Avenue (PDA)',
    event: 'Rotaract Club of Kathmandu Mid-Town'
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="section conference-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">Professional Services</h2>

        <div className="conference-card">
          {services.map((conf, index) => (
            <div key={conf.id} className="conference-item">
              <h3>{conf.title}</h3>
              <h4>{conf.event}</h4>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
