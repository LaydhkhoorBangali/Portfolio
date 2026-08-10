import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import FallbackImage from './FallbackImage.jsx';

export default function GalleryLightbox({
  projects,
  index,
  onClose,
  onChangeIndex,
}) {
  const project = index != null ? projects[index] : null;
  const total = projects.length;

  useEffect(() => {
    if (index == null) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        onChangeIndex((index + 1) % total);
      }
      if (event.key === 'ArrowLeft') {
        onChangeIndex((index - 1 + total) % total);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, total, onClose, onChangeIndex]);

  const goPrev = () => onChangeIndex((index - 1 + total) % total);
  const goNext = () => onChangeIndex((index + 1) % total);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.shortTitle} preview`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            className="gallery-lightbox-backdrop"
            aria-label="Close preview"
            onClick={onClose}
          />

          <motion.div
            className="gallery-lightbox-panel"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            <div className="gallery-lightbox-toolbar">
              <p className="gallery-lightbox-count">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(total).padStart(2, '0')}
              </p>
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <div className="gallery-lightbox-stage">
              {total > 1 && (
                <button
                  type="button"
                  className="gallery-nav gallery-nav-prev"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  ←
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  className="gallery-lightbox-media"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FallbackImage
                    src={project.poster.src}
                    fallback={project.poster.fallback}
                    alt={project.poster.alt}
                  />
                </motion.div>
              </AnimatePresence>

              {total > 1 && (
                <button
                  type="button"
                  className="gallery-nav gallery-nav-next"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  →
                </button>
              )}
            </div>

            <div className="gallery-lightbox-meta">
              <div>
                <p className="gallery-lightbox-label">
                  {project.format} · {project.year}
                  {project.unreleased ? ' · Unreleased' : ''}
                </p>
                <h2>{project.shortTitle}</h2>
                <p className="gallery-lightbox-credit">{project.credit}</p>
              </div>

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

            {total > 1 && (
              <ul className="gallery-thumbs" aria-label="Gallery thumbnails">
                {projects.map((item, thumbIndex) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={
                        thumbIndex === index
                          ? 'gallery-thumb is-active'
                          : 'gallery-thumb'
                      }
                      onClick={() => onChangeIndex(thumbIndex)}
                      aria-label={`Preview ${item.shortTitle}`}
                      aria-current={thumbIndex === index ? 'true' : undefined}
                    >
                      <FallbackImage
                        src={item.poster.src}
                        fallback={item.poster.fallback}
                        alt=""
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
