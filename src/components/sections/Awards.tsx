import { motion } from 'framer-motion';
import './../../assets/styles/conference.scss';

const awards = [
  {
    id: 1,
    title: 'Research and Travel Grant from ULL to attend and present at Drug R&D Conference',
    date: '2025',
  },
  {
    id: 2,
    title: 'Graduate Student Organization (GSO) Travel Grant from ULL to attend and present at Drug R&D Conference',
    date: '2025',
  },
  {
    id: 3,
    title: 'Appreciation certificate for volunteering on Science Day’ 25 organized by ULL',
    date: '2025',
  },
  {
    id: 4,
    title: 'Grant for research project supported by National Institute of Health (NIH)',
    date: '2024',
  },
  {
    id: 5,
    title: 'Research grant from Louisiana Board of Regents',
    date: '2024',
  },
  {
    id: 6,
    title: 'Academic Excellence Award from the University of Louisiana at Lafayette',
    date: '2024',
  },
  {
    id: 7,
    title: 'Appreciation certificate for volunteering on Science Day’ 24 organized by ULL',
    date: '2024',
  },
  {
    id: 8,
    title: 'Awarded with Neural Information Processing Systems (NeurIPS) Outreach Scholarship',
    date: '2023',
  },
  {
    id: 9,
    title: 'Tech Gyan V 2.0 (Thapathali Campus)',
    date: '2018',
  },
  {
    id: 10,
    title: 'Yantra 7.0 and 8.0 (RAN) Hackathon - Finalist',
    date: '2018 - 2019',
  },
  {
    id: 11,
    title: 'Line Follow Competition “Destiny” - First Runner Up',
    date: '2017',
  },
  {
    id: 12,
    title: 'MechTRIX 8.0 (Pulchowk Campus)',
    date: '2017',
  },
  {
    id: 13,
    title: 'CCNA and Red Hat Linux Workshop',
    date: '2017',
  }, {
    id: 14,
    title: 'Student of the year - Uniglobe H S School',
    date: '2016',
  },
];

const Awards = () => {
  return (
    <motion.section
      id="awards"
      className="section conference-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">Honors and Awards</h2>

        <div className="award-card">
          {awards.map((conf, index) => (
            <div key={conf.id} className="conference-item">
              <h3>{conf.title}, {conf.date}</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
