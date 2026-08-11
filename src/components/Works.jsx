import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { allProjects, formats } from '../data/projects.js';
import FallbackImage from './FallbackImage.jsx';
import GalleryLightbox from './GalleryLightbox.jsx';

function WorkCard({ project, index, onOpen }) {
  return (
    <motion.li
      className="work-card"
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        className="work-card-btn"
        onClick={() => onOpen(index)}
        aria-label={`View ${project.shortTitle}`}
      >
        <span className="work-card-media">
          <FallbackImage
            src={project.poster.src}
            fallback={project.poster.fallback}
            alt={project.poster.alt}
            loading="lazy"
          />
        </span>
        <span className="work-card-meta">
          <span className="work-card-top">
            <span>{project.format}</span>
            <span>{project.year}</span>
          </span>
          <span className="work-card-title">{project.shortTitle}</span>
          <span className="work-card-credit">{project.credit}</span>
        </span>
      </button>
    </motion.li>
  );
}

export default function Works({ showIntro = false }) {
  const [filter, setFilter] = useState('All');
  const [previewIndex, setPreviewIndex] = useState(null);

  const visible = useMemo(() => {
    if (filter === 'All') return allProjects;
    return allProjects.filter((project) => project.format === filter);
  }, [filter]);

  return (
    <section id="works" className="works" aria-labelledby="works-heading">
      {showIntro ? (
        <div className="works-intro">
          <p className="works-kicker">Works</p>
          <h2 id="works-heading">Selected works</h2>
        </div>
      ) : (
        <h2 id="works-heading" className="visually-hidden">
          Works
        </h2>
      )}

      <div className="works-head">
        <div className="work-filters" role="tablist" aria-label="Filter works by format">
          {formats.map((format, index) => {
            const active = filter === format;
            return (
              <span key={format} className="work-filter-wrap">
                {index > 0 && <span className="work-filter-sep">,</span>}
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={active ? 'work-filter is-active' : 'work-filter'}
                  onClick={() => {
                    setFilter(format);
                    setPreviewIndex(null);
                  }}
                >
                  {format}
                </button>
              </span>
            );
          })}
        </div>
      </div>

      <motion.ul className="works-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setPreviewIndex}
            />
          ))}
        </AnimatePresence>
      </motion.ul>

      <GalleryLightbox
        projects={visible}
        index={previewIndex}
        onClose={() => setPreviewIndex(null)}
        onChangeIndex={setPreviewIndex}
      />
    </section>
  );
}
