import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import './Theme.css';

const Theme = ({ currentTheme, setTheme }) => {
  const themes = [
    {
      id: 'light',
      name: 'Light Professional',
      icon: <Sun size={24} />,
      desc: 'Clean, bright, and strictly professional.',
      colors: ['#ffffff', '#f8fafc', '#3b82f6', '#0f172a']
    },
    {
      id: 'dark',
      name: 'Dark Developer',
      icon: <Moon size={24} />,
      desc: 'Sleek dark mode optimized for developers.',
      colors: ['#0f172a', '#1e293b', '#60a5fa', '#f8fafc']
    },
    {
      id: 'gradient',
      name: 'Premium Gradient',
      icon: <Sparkles size={24} />,
      desc: 'Vibrant, deep colors with a premium feel.',
      colors: ['#0d0c1e', '#161530', '#818cf8', '#f8fafc']
    }
  ];

  return (
    <div className="theme-page fade-in">
      <section className="section bg-alt" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="theme-header">
            <h1 className="page-title">Appearance</h1>
            <p className="theme-subtitle">Customize the portfolio entirely to your liking.</p>
          </div>
          
          <div className="theme-grid">
            {themes.map((t) => (
              <motion.div 
                key={t.id}
                className={`theme-card glass-card ${currentTheme === t.id ? 'active-theme' : ''}`}
                onClick={() => setTheme(t.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="theme-icon-wrapper">
                  {t.icon}
                </div>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <div className="theme-palette">
                  {t.colors.map((c, i) => (
                    <span key={i} className="color-swatch" style={{ background: c }}></span>
                  ))}
                </div>
                
                {currentTheme === t.id && (
                  <div className="active-indicator">
                    <span>Active Theme</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theme;
