import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './../../assets/styles/about.scss';

const About = () => {
  const educations = [
    {
      id: 1,
      degree: "Master's in Computer Science",
      university: "University of Louisiana at Lafayette",
      year: "2023 - Present"
    },
    {
      id: 2,
      degree: "Bachelor's in Electronics and Communication Engineering",
      university: "Thapathali Campus, IOE, Tribhuvan University",
      year: "2016 - 2021"
    }
  ];
  const experiences = [
    {
      id: 1,
      title: "W.J. Cody Associates (Intern)",
      company: "Argonne National Laboratory",
      period: "May 2025 - Aug 2025",
      description: "Design and develop stochastic derivative-free optimization algorithms for artificial intelligence, machine learning and quantum computing applications."
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "North Star Developer's Village (NSDEVIL)",
      period: "Jan 2023 - July 2023",
      description: "Developed AI powered web and cross platform mobile applications for UBLCLOUD, integrating advanced machine learning models. Led a team project focused on real world ML applications."
    },
    {
      id: 3,
      title: "Instructor",
      company: "Advanced College of Engineering and Management",
      period: "June 2022 - Jan 2023",
      description: "Served as Course Instructor for Artificial Intelligence and Mobile Application Development, delivering hands on learning experiences. Supported Numerical Methods coursework as a Lab Assistant, guiding students through computational problem solving techniques."
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "EKbana Solutions Pvt. Ltd.",
      period: "Feb 2021 - June 2022",
      description: "Integrated machine learning algorithms into cross platform mobile applications and delivered tailored solutions for international clients. Developed and tested in-house SDKs with a focus on API integration and state management. Mentored interns on ML-driven app development and efficient use of local storage."
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      company: "Sireto Technology",
      period: "Sept 2020 - Nov 2020",
      description: "Developed a face recognition application leveraging machine learning algorithms. Utilized Flask and Spring Boot for robust API integration, and built the mobile interface using Flutter for cross-platform deployment."
    }

  ];

  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* <h2 className="section-title">About Me</h2> */}

        <div className="about-grid">
          {/* === LEFT COLUMN === */}
          <div className="about-left">
            <h3>Education</h3>
            <div className="timeline">
              {educations.map(edu => (
                <div key={edu.id} className="timeline-item">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.university} | {edu.year}</h5>
                </div>
              ))}
            </div>

            <div className="about-profile">
              <h3>Professional Profile</h3>
              <p>
                I'm a passionate software AI/ML engineer with hand on experiennce in web and cross platform mobile applications. Specialized in AI/ML algorithms, GenAI, NLP, DNN, GNN, HPC, React, Node.js, and other
                technologies with a strong focus on performance and user experience.
              </p>

              <div className="personal-info">
                <h4>Personal Information</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>rauniyar.krishna.nepal@gmail.com</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+1 (337) 390-2967</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Lafayette, LA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="about-right">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experiences.map(exp => (
                <div key={exp.id} className="timeline-item">
                  <h4>{exp.title}</h4>
                  <h5>{exp.company} | {exp.period}</h5>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === SOCIAL LINKS === */}
        <div className="social-links">
          <a href="https://github.com/KrishnaRauniyar" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/krishna-rauniyar-09b9a6152/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://scholar.google.com/citations?user=pM9vxlQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGraduationCap} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
