import { motion } from 'framer-motion';

const socials = [
  {
    label: 'IMDb',
    href: 'https://www.imdb.com/name/nm15697418/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shadesofakir/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <motion.div
          className="footer-top"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p className="footer-index" variants={fadeUp} custom={0.05}>
            Contact
          </motion.p>
        </motion.div>

        <motion.div
          className="footer-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="footer-block" variants={fadeUp} custom={0.28}>
            <h3>Role</h3>
            <p>Filmmaker, Director, Cinematographer & Assistant Director</p>
          </motion.div>

          <motion.div className="footer-block" variants={fadeUp} custom={0.34}>
            <h3>Based in</h3>
            <p>India</p>
          </motion.div>

          <motion.div className="footer-block" variants={fadeUp} custom={0.4}>
            <h3>Social</h3>
            <ul className="footer-social">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{item.label}</span>
                    <span className="footer-social-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bar"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="footer-copy">
            © {year} Shantanu Dey. All rights reserved.
          </p>

          <nav className="footer-mini-nav" aria-label="Footer">
            <button type="button" onClick={() => onNavigate?.('home')}>
              Home
            </button>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
