import { BrowserRouter as Router, Routes, Route , ScrollRestoration} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext.';
import ThemeSwitcher from './components/ThemeSwitcher';
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (

    <ThemeProvider>
       <div className="min-h-screen bg-white dark:bg-gray-900 
                      text-gray-900 dark:text-white transition-colors duration-300">
            <Router>
              <div className="min-h-screen flex flex-col  dark:bg-primary-dark ">
                <Navbar />
                <main className="container flex-grow min-w-full ">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>

  );
}

export default App;