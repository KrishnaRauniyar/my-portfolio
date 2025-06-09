import { motion } from 'framer-motion';
import './../../assets/styles/conference.scss';

const conferences = [
  {
    id: 1,
    title: 'TSR-Based Image Representations for Protein Classification: Leveraging Deep Learning and Explainability Techniques',
    event: 'ISCB - International Society for Computational Biology - Great Lakes Bioinformatics (GLBIO) 2025',
    location: 'Minneapolis, MN',
    date: 'May 2025',
  },
  {
    id: 2,
    title: 'TSR Method for Probing Molecular Interactions',
    event: 'Drug R&D 2025',
    location: 'Boston, MA',
    date: 'Feb 2025',
  },
    {
    id: 3,
    title: 'Guest Speaker on Deep Learning: A Mathematical Perspective with Applications',
    event: 'University of Louisiana at Lafayette, Department of Mathematics 2024',
    location: 'Lafayette, LA',
    date: 'Oct 2024',
  }
];

const Conference = () => {
  return (
    <motion.section
      id="conference"
      className="section conference-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">Conference and Invited Talk</h2>

        <div className="conference-card">
          {conferences.map((conf, index) => (
            <div key={conf.id} className="conference-item">
              <h3>{conf.title}</h3>
              <h4>{conf.event}</h4>
              <p>{conf.location} | {conf.date}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Conference;
