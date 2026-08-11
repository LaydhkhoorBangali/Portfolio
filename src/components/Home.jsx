import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import Works from './Works.jsx';

const title = 'Shantanu Dey';
const MOBILE_HERO = '/assets/images/shantanu-dey.jpg';
const MOBILE_FALLBACK = '/assets/images/shantanu-dey.svg';
const DESKTOP_HERO = '/assets/images/shantanu_pc.jpeg';

function scrollToWorks() {
  const section = document.getElementById('works');
  if (!section) return;
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home({ scrollToWorks: scrollSignal }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const xPct = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const yPct = useSpring(mouseY, { stiffness: 45, damping: 22 });
  const parallaxX = useMotionTemplate`calc((${xPct} - 0.5) * 28px)`;
  const parallaxY = useMotionTemplate`calc((${yPct} - 0.5) * 20px)`;

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduce || !finePointer) return undefined;

    const onMove = (event) => {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!scrollSignal) return undefined;
    const timer = window.setTimeout(scrollToWorks, 80);
    return () => window.clearTimeout(timer);
  }, [scrollSignal]);

  return (
    <div className="home-page">
      <section className="home" aria-labelledby="home-brand">
        <div className="home-stage">
          <motion.div
            className="home-visual"
            style={{ x: parallaxX, y: parallaxY, scale: 1.08 }}
          >
            <picture className="home-picture">
              <source media="(min-width: 768px)" srcSet={DESKTOP_HERO} />
              <img
                className="home-image"
                src={MOBILE_HERO}
                alt="Portrait of Shantanu Dey, filmmaker"
                onError={(event) => {
                  const img = event.currentTarget;
                  if (!img.dataset.fallbackApplied) {
                    img.dataset.fallbackApplied = 'true';
                    img.src = MOBILE_FALLBACK;
                  }
                }}
              />
            </picture>
          </motion.div>

          <div className="home-scrim" aria-hidden="true" />

          <div className="home-content">
            <h1 id="home-brand" className="home-title" aria-label={title}>
              {title.split(' ').map((word, wordIndex) => (
                <span className="home-title-word" key={word}>
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${word}-${charIndex}`}
                      className="home-title-char"
                      initial={{ opacity: 0, y: '0.55em' }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + (wordIndex * 8 + charIndex) * 0.035,
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              className="home-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Filmmaker · Director · Cinematographer
            </motion.p>
          </div>

          <button
            type="button"
            className="home-scroll-hint"
            onClick={scrollToWorks}
            aria-label="Scroll to works"
          >
            <span>Works</span>
            <span className="home-scroll-line" aria-hidden="true" />
          </button>
        </div>
      </section>

      <Works showIntro />
    </div>
  );
}
