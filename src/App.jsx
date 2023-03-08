import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { Qualification } from './components/qualification/Qualification';
import { ScrollUp } from './components/scrollup/ScrollUp';
import { Services } from './components/services/Services';
import { Skills } from './components/skills/Skills';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div>
      <Header />
      
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />
    </div>
  );
}

export default App;
