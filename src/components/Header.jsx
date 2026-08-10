import { motion } from 'framer-motion';

const links = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'info', label: 'Info' },
];

export default function Header({ view, onNavigate }) {
  return (
    <header className="site-header">
      <button
        type="button"
        className="site-brand"
        onClick={() => onNavigate('home')}
        aria-label="Shantanu Dey — Home"
      >
        <span className="brand-text brand-text-full">Shantanu Dey</span>
        <span className="brand-text brand-text-short" aria-hidden="true">
          S. Dey
        </span>
      </button>

      <nav className="site-nav" aria-label="Primary">
        {links.map((link) => {
          const active = view === link.id;

          return (
            <button
              key={link.id}
              type="button"
              className={active ? 'nav-link is-active' : 'nav-link'}
              onClick={() => onNavigate(link.id)}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
              {active && (
                <motion.span
                  className="nav-ink"
                  layoutId="nav-ink"
                  transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
