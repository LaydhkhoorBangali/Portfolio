import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Info() {
  return (
    <section className="info" aria-labelledby="info-heading">
      <motion.div
        className="info-frame"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="info-index"
          custom={0.05}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          01 / Info
        </motion.p>

        <motion.h2
          id="info-heading"
          className="info-heading"
          custom={0.12}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Framing stories across camera, directing, and the cut.
        </motion.h2>

        <div className="info-layout">
          <motion.p
            className="info-bio"
            custom={0.22}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            An emerging Indian filmmaker with practical experience across the
            camera, directing, and editorial departments. Working in short
            fiction, documentaries, and music videos, he specializes in guiding
            projects through their complete lifecycle, from independent
            micro-budget scheduling to final post-production delivery.
          </motion.p>

          <motion.div
            className="info-aside"
            custom={0.32}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="info-block">
              <h3>Contact</h3>
              <a href="mailto:shantanudeywork@gmail.com">
                shantanudeywork@gmail.com
              </a>
            </div>
            <div className="info-block">
              <h3>Elsewhere</h3>
              <a
                href="https://www.imdb.com/name/nm15697418/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDb
              </a>
              <a
                href="https://www.instagram.com/shadesofakir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
