import { Link } from 'react-scroll';
import '../../src/assets/styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* <div className="logo">
          <Link to="hero" smooth={true} duration={500}>Krishna Rauniyar</Link>
        </div> */}
        <nav className="nav">
          <ul>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            {/* <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li> */}
            <li><Link to="publications" smooth={true} duration={500}>Publications</Link></li>
            <li><Link to="conference" smooth={true} duration={500}>Conference</Link></li>
            <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
            <li><Link to="awards" smooth={true} duration={500}>Awards</Link></li>
            <li><Link to="services" smooth={true} duration={500}>Professional Service</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
