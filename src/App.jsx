import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Theme from './pages/Theme';
import CallIconButton from './components/CallIconButton';
import Cursor from './components/Cursor';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Handle contact form context (e.g. knowing why the user navigated to contact)
  // This can be done via React Router state

  return (
    <Router>
      <Cursor />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/theme" element={<Theme currentTheme={theme} setTheme={setTheme} />} />
          </Routes>
        </main>
        <Footer />
        <CallIconButton />
      </div>
    </Router>
  );
}

export default App;
