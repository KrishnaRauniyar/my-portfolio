import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './../../assets/styles/publications.scss';

const publications = [
  {
    id: '1',
    title: 'Development of a novel method for representing 3D structures of nucleotides using the concept of the TSR algorithm and evaluation of the method through studying specific interactions between DNAs and p53',
    authors: "Krishna Rauniyar, Tarikul I. Milon, Poorya Khajouie, Ramy Alabdulkarim, Yuwu Chen, Sarika Kondra, Vijay Raghavan and Wu Xu",
    conference: 'PROTEINS: Structure, Function, and Bioinformatics 2025',
    link: '/publications/1',
  },
  {
    id: '2',
    title: 'Application of the Triangular Spatial Relationship Algorithm in Representing and Quantifying Conformational Changes in Chlorophylls and Protein Local Environments',
    authors: 'Tarikul I. Milon, Khairum H. Orthi, Krishna Rauniyar, Rhen M. Renfrow, August A. Gallo and Wu Xu',
    conference: 'Photochem 2025',
    link: 'https://doi.org/10.3390/photochem5010008',
  },
  {
    id: '3',
    title: 'Integrating Secondary Structures Information into Triangular Spatial Relationships (TSR) for Advanced Protein Classification',
    authors: 'Poorya Khajouie, Titli Sarkar, Krishna Rauniyar, Li Chen, Wu Xu, Vijay Raghavan',
    conference: 'arXiv preprint 2024',
    link: 'https://doi.org/10.48550/arXiv.2411.12853',
  },
  {
    id: '4',
    title: 'Representing and Quantifying Conformational Changes of Kinases and Phosphatases Using the TSR-Based Algorithm',
    authors: 'Tarikul I. Milon, Krishna Rauniyar, Sara Furman, Khairum H. Orthi, Yingchun Wang, Vijay Raghavan, and Wu Xu',
    conference: 'Kinases and Phosphatases 2024',
    link: 'https://doi.org/10.3390/kinasesphosphatases2040021',
  },
  {
    id: '5',
    title: 'Generative AI-Driven Automated News Content Generation: Integrating Web Scraping, Media Creation, and Social Media Optimization',
    authors: 'Sandeep Chataut, Naseeb Dangi, Nabin Pakka, Nitesh Nepal, Krishna Rauniyar',
    conference: 'IJSET 2024',
    link: 'file:///C:/Users/c00551157/Downloads/IJSET_V12_issue6_8831.pdf',
  },
  {
    id: '6',
    title: 'Evaluation of Network Intrusion Detection with Feature Selection using Random Forest and Deep Neural Network',
    authors: 'Krishna Rauniyar, Nabin Pakka, Sagar Dangal, Rupan Chaulagain',
    conference: 'KEC JSE 2023',
    link: 'https://www.nepjol.info/index.php/kjse/article/view/60535',
  },
];

const Publications = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePublications = showAll ? publications : publications.slice(0, 3);

  return (
    <motion.section
      id="publications"
      className="section publications-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">Publications</h2>

        <div className="publications-grid">
          {visiblePublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className="publication-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="publication-title">{pub.title}</h3>
              {/* <p className="publication-authors">{pub.authors}</p> */}
              <p
                className="publication-authors"
                dangerouslySetInnerHTML={{
                  __html: pub.authors.replace(
                    /Krishna Rauniyar/g,
                    '<strong>Krishna Rauniyar</strong>'
                  ),
                }}
              />
              <p className="publication-conference">{pub.conference}</p>
              <a href={pub.link} className="publication-link">
                View Details →
              </a>
            </motion.div>
          ))}
        </div>

        {publications.length > 3 && (
          <div className="show-toggle">
            <button onClick={() => setShowAll(!showAll)} className="btn btn-outline">
              {showAll ? 'Show Less ▲' : 'Show More ▼'}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Publications;
