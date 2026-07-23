import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import MatrixRain from './components/MatrixRain';
import Cursor from './components/Cursor';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './index.css';

function App() {
  useScrollAnimation();
  return (
    <div className="App">
      <MatrixRain />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;
