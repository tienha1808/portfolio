import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Layout>
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </Layout>
    </>
  );
}

export default App;
