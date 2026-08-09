export const projectGroups = [
  {
    format: 'Documentary',
    projects: [
      {
        id: 'mukut-parbat',
        title: 'Mukut Parbat — Challenge & Difficulties / Himalayan Floral Vignettes',
        shortTitle: 'Mukut Parbat',
        year: '2026',
        credit: 'Videographer & Editor',
        unreleased: true,
        href: null,
        note: 'A Himalayan documentary exploring ascent, endurance, and floral vignettes at altitude.',
        poster: {
          src: '/assets/images/posters/mukut-parbat.jpg',
          fallback: '/assets/images/posters/mukut-parbat.svg',
          alt: 'Poster for Mukut Parbat',
        },
      },
    ],
  },
  {
    format: 'Short Film',
    projects: [
      {
        id: 'nightmare',
        title: 'Nightmare',
        shortTitle: 'Nightmare',
        year: '2026',
        credit:
          'Assistant Director, Associate Cinematographer & Editorial Production Assistant',
        unreleased: true,
        href: 'https://www.imdb.com/title/tt39961702/',
        note: 'A short fiction piece shaped across camera, directing, and editorial departments.',
        poster: {
          src: '/assets/images/posters/nightmare.jpg',
          fallback: '/assets/images/posters/nightmare.svg',
          alt: 'Poster for Nightmare',
        },
      },
      {
        id: 'the-boy-in-the-ghetto',
        title: 'The Boy in the Ghetto',
        shortTitle: 'The Boy in the Ghetto',
        year: '2023',
        credit: 'Director, Writer & Cinematographer',
        href: 'https://youtu.be/x85C4poMzCw?si=9yGrQo53X0YMyBQs',
        note: 'An independent short written, directed, and shot end-to-end.',
        poster: {
          src: '/assets/images/posters/the-boy-in-the-ghetto.jpg',
          fallback: '/assets/images/posters/the-boy-in-the-ghetto.svg',
          alt: 'Poster for The Boy in the Ghetto',
        },
      },
    ],
  },
  {
    format: 'Music Video',
    projects: [
      {
        id: 'born-again',
        title: '"Born Again" — Last Week of December',
        shortTitle: 'Born Again',
        year: '2025',
        credit: 'Assistant Cinematographer',
        href: 'https://youtu.be/6uokh7ODJ30?si=1oG_IEO2rHB-1LQh',
        note: 'Music video cinematography support for Last Week of December.',
        poster: {
          src: '/assets/images/posters/born-again.png',
          fallback: '/assets/images/posters/born-again.svg',
          alt: 'Poster for Born Again',
        },
      },
    ],
  },
];

export const allProjects = projectGroups.flatMap((group) =>
  group.projects.map((project) => ({ ...project, format: group.format }))
);

export const formats = ['All', ...projectGroups.map((group) => group.format)];
