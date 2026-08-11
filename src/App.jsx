import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CursorGlow from './components/CursorGlow.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Grain from './components/Grain.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Info from './components/Info.jsx';
import WorksPage from './components/WorksPage.jsx';

const pageTransition = {
  initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(6px)',
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

export default function App() {
  const [view, setView] = useState('home');
  const [scrollToWorks, setScrollToWorks] = useState(0);

  const navigate = (target) => {
    if (target === 'works-section') {
      if (view !== 'home') {
        setView('home');
      }
      setScrollToWorks((value) => value + 1);
      return;
    }

    setView(target);

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Grain />
      <CursorGlow />
      <Header view={view} onNavigate={navigate} />

      <main id="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            className={`view view-${view}`}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {view === 'home' && <Home scrollToWorks={scrollToWorks} />}
            {view === 'works' && <WorksPage />}
            {view === 'gallery' && <Gallery />}
            {view === 'info' && <Info />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
