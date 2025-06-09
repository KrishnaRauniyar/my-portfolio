import { motion } from 'framer-motion';
import './../../assets/styles/conference.scss';

const certifications = [
  {
    id: 1,
    title: 'Natural Language Processing Specialization by DeepLearning.AI from Coursera',
    date: 'Sept 2020',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KQ2PKSVDGGNQ',
  },
  {
    id: 2,
    title: 'Deep Learning Specialization by DeepLearning.AI from Coursera',
    date: 'June 2020',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/SF6WPZUWD8M2',
  },
  {
    id: 3,
    title: 'Understanding Research Methods by University of London from Coursera',
    date: 'Aug 2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/HBQEBH78LXBZ',
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="section conference-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="conference-card">
          {certifications.map((conf, index) => (
            <div key={conf.id} className="conference-item">
              <h3>{conf.title}, {conf.date}</h3>
              <a href={conf.link} className="conference-link">View Details →</a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
