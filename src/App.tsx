import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// import Projects from './components/sections/Projects';
import './assets/styles/main.scss';
import Publications from './components/sections/Publications';
import Conference from './components/sections/Conference';
import Certifications from './components/sections/Certifications';
import Awards from './components/sections/Awards';
import Services from './components/sections/services';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Projects /> */}
        <Publications />
        <Conference />
        <Certifications />
        <Awards />
        <Services />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;