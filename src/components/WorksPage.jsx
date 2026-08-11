import { motion } from 'framer-motion';
import Works from './Works.jsx';

export default function WorksPage() {
  return (
    <section className="works-page" aria-labelledby="works-page-heading">
      <motion.div
        className="works-page-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="works-kicker">Works</p>
        <h1 id="works-page-heading">Selected works</h1>
      </motion.div>

      <Works />
    </section>
  );
}
