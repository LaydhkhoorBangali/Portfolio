import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { allProjects, formats } from '../data/projects.js';
import FallbackImage from './FallbackImage.jsx';
import GalleryLightbox from './GalleryLightbox.jsx';

function ProjectTile({ project, index, onOpen }) {
  return (
    <motion.li
      className="work-tile"
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <button
        type="button"
        className="work-tile-btn"
        onClick={() => onOpen(index)}
        aria-label={`Preview ${project.shortTitle}`}
      >
        <span className="work-tile-media">
          <FallbackImage
            src={project.poster.src}
            fallback={project.poster.fallback}
            alt={project.poster.alt}
            loading="lazy"
          />
          <span className="work-tile-veil" aria-hidden="true" />
          <span className="work-tile-hover">
            <span className="work-tile-hover-title">{project.shortTitle}</span>
            <span className="work-tile-hover-meta">
              {project.format} · {project.year}
            </span>
            <span className="work-tile-hover-cta">Preview</span>
          </span>
        </span>
      </button>
    </motion.li>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [previewIndex, setPreviewIndex] = useState(null);

  const visible = useMemo(() => {
    if (filter === 'All') return allProjects;
    return allProjects.filter((project) => project.format === filter);
  }, [filter]);

  return (
    <section id="gallery-grid" className="work" aria-labelledby="gallery-filters">
      <div className="work-head">
        <h2 id="gallery-filters" className="visually-hidden">
          Gallery filters
        </h2>

        <div className="work-filters" role="tablist" aria-label="Filter by format">
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

      <motion.ul className="work-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <ProjectTile
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
