import { motion } from 'framer-motion';
import Projects from './Projects.jsx';

export default function Gallery() {
  return (
    <section className="gallery-page" aria-labelledby="gallery-page-heading">
      <motion.div
        className="gallery-page-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="gallery-page-kicker">Gallery</p>
        <h1 id="gallery-page-heading">Selected frames</h1>
      </motion.div>

      <Projects />
    </section>
  );
}
