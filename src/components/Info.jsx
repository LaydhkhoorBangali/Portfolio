import { motion } from 'framer-motion';

const emails = [
  'shantanudeywork@gmail.com',
  'shadesofakir@gmail.com',
];

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

const departments = [
  'Director',
  'Cinematographer',
  'Assistant Director',
  'Editor',
  'Writer',
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.75, ease },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export default function Info() {
  return (
    <section className="info" aria-labelledby="info-heading">
      <div className="info-inner">
        <motion.div
          className="info-rule"
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, ease }}
        />

        <motion.header
          className="info-hero"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.p className="info-kicker" variants={item}>
            Info
          </motion.p>
          <motion.h1 id="info-heading" className="info-heading" variants={item}>
            Shantanu Dey
          </motion.h1>
          <motion.p className="info-role" variants={item}>
            Filmmaker · Director · Cinematographer
          </motion.p>
        </motion.header>

        <div className="info-columns">
          <motion.article
            className="info-column"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h2 className="info-label" variants={item}>
              About
            </motion.h2>
            <motion.p className="info-bio" variants={item}>
              An emerging Indian filmmaker with practical experience across the
              camera, directing, and editorial departments. Working in short
              fiction, documentaries, and music videos, he specializes in
              guiding projects through their complete lifecycle, from
              independent micro-budget scheduling to final post-production
              delivery.
            </motion.p>
          </motion.article>

          <motion.div
            className="info-column"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div className="info-group" variants={item}>
              <h2 className="info-label">Contact</h2>
              <ul className="info-list">
                {emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="info-group" variants={item}>
              <h2 className="info-label">Elsewhere</h2>
              <ul className="info-list">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{social.label}</span>
                      <span className="info-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="info-column"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h2 className="info-label" variants={item}>
              Departments
            </motion.h2>
            <motion.ul className="info-departments" variants={stagger}>
              {departments.map((dept, index) => (
                <motion.li key={dept} variants={item}>
                  <span className="info-dept-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{dept}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.p
          className="info-base"
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Based in India
        </motion.p>
      </div>
    </section>
  );
}
