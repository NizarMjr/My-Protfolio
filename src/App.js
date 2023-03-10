import './App.css';
import Links from './components/Links';
import Landing from './components/Landing';
import ColorSwitcher from './components/ColorSwitcher';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
      <Links />
      <ColorSwitcher />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
