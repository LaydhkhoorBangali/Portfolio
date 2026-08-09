import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import FallbackImage from './FallbackImage.jsx';

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-detail"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            className="project-detail-backdrop"
            aria-label="Close project"
            onClick={onClose}
          />

          <motion.article
            className="project-detail-panel"
            initial={{ y: '12%', opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: '8%', opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <button
              type="button"
              className="project-detail-close"
              onClick={onClose}
            >
              Close
            </button>

            <div className="project-detail-media">
              <FallbackImage
                src={project.poster.src}
                fallback={project.poster.fallback}
                alt={project.poster.alt}
              />
            </div>

            <div className="project-detail-body">
              <p className="project-detail-meta">
                {project.format} · {project.year}
                {project.unreleased ? ' · Unreleased' : ''}
              </p>
              <h2 id="project-detail-title">{project.title}</h2>
              <p className="project-detail-credit">{project.credit}</p>
              <p className="project-detail-note">{project.note}</p>

              {project.href && (
                <a
                  className="btn-primary"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Watch / View</span>
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
