// For each project:
// - images    → array of screenshot paths in /public/projects. First image is the card's cover.
// - status    → 'shipped' | 'in-development'. Drives the badge shown on the card.
// - highlights → short bullet points shown in the expanded "Read more" panel.
// - links.code  → GitHub repo URL. Leave as null to hide the Code button.
// - links.live  → deployed URL, if any. Leave as null if it isn't deployed yet.
export const projects = [
  {
    id: 'skill-hive',
    tag: 'Final Year Project',
    title: 'Skill Hive',
    status: 'shipped',
    tagline: 'Skill-based hiring, not resume spam.',
    blurb:
      'A hiring and internship platform that matches students to real opportunities by actual skill fit, not by who applies fastest.',
    description: [
      "In Pakistan's student job market, the real problem isn't a lack of internships — it's noise. Students mass-apply to anything remotely relevant, and companies drown in applications that don't match what they actually need. Nobody's time is well spent.",
      "Skill Hive fixes this with a two-phase matching algorithm: it scores each student's verified skills and experience against a job or internship's actual requirements, so students see roles they're realistically qualified for, and companies see a shortlist worth reading — not a pile of PDFs.",
      'The platform ships three role-based dashboards — student, company, and admin — each built around what that user actually needs to do next, not a shared generic view.',
    ],
    stack: ['React JS', 'Laravel', 'MySQL', 'REST API', 'Role-based Auth'],
    highlights: [
      'Two-phase compatibility scoring between candidate skills and job requirements',
      'Separate student / company / admin dashboards with role-scoped permissions',
      'Company-side applicant shortlisting instead of raw application dumps',
      'Built with two teammates, supervised by faculty, as a full BSCS final year project',
    ],
    images: [
      '/projects/skillhive-1-home.jpg',
      '/projects/skillhive-2-student-dashboard.jpg',
      '/projects/skillhive-5-employer-dashboard.jpg',
      '/projects/skillhive-3-jobs.jpg',
      '/projects/skillhive-4-profile.jpg',
      '/projects/skillhive-6-job-management.jpg',
    ],
    links: { code: 'https://github.com/your-username/skill-hive', live: null },
  },
  {
    id: 'trustlocal',
    tag: 'In Development',
    title: 'TrustLocal',
    status: 'in-development',
    tagline: 'Trust scores, not star ratings.',
    blurb:
      'A local services marketplace where reputation is computed from verifiable behavior — completions, response time, disputes — not self-reported reviews.',
    description: [
      'Local service marketplaces share the same three failures: reviews are easy to fake, providers face no real accountability after a booking, and payment happens outside any protected flow — so disputes have nowhere to go.',
      'TrustLocal replaces the star rating with a Trust Score computed entirely from system-logged events: completion rate, response time, on-time rate, dispute outcomes, and repeat-customer rate — each weighted, then shown as a Bronze–Platinum tier rather than a raw number that invites nitpicking.',
      'Payments run through Stripe Connect with an escrow-style hold: funds are authorized on acceptance, released on confirmed completion, and frozen automatically if either side opens a dispute — so both customer and provider are actually protected, not just promised protection.',
    ],
    stack: ['Laravel', 'React', 'MySQL', 'Stripe Connect', 'Laravel Reverb', 'Redis'],
    highlights: [
      'Weighted Trust Score engine recalculated nightly from append-only behavioral event logs',
      'Escrow payment flow via Stripe Connect with auto-release and dispute freezing',
      'Real-time chat scoped to active bookings, doubling as dispute evidence',
      'Admin dispute-resolution dashboard with fault attribution feeding back into scores',
    ],
    images: ['/projects/trustlocal-1-hero.jpg'],
    links: { code: null, live: null },
  },
  {
    id: 'vendo',
    tag: 'E-Commerce Platform',
    title: 'Vendo',
    status: 'shipped',
    tagline: 'A store that actually takes orders.',
    blurb:
      'A full e-commerce storefront — catalog, cart, checkout, and order flow — backed by a relational schema built to handle real inventory and orders.',
    description: [
      "Most student e-commerce projects stop at a product grid. Vendo goes further: a full purchase flow from browsing to checkout, backed by a database schema that models real retail concerns — categories, stock, and order state — instead of a flat products table.",
      'The goal was to practice the part of e-commerce that actually matters commercially: reliably taking someone\'s money for a real order, not just rendering a nice catalog page.',
    ],
    stack: ['Laravel', 'MySQL', 'Blade', 'InfinityFree'],
    highlights: [
      'Full product catalog with categories, pricing, and stock status',
      'Cart and checkout flow backed by a relational order schema',
      'Deployed to shared hosting to practice a real production handoff',
    ],
    images: ['/projects/vendo-1-home.jpg', '/projects/vendo-2-product.jpg'],
    links: { code: 'https://github.com/your-username/vendo', live: null },
  },
  {
    id: 'passx',
    tag: 'Practice Project',
    title: 'PassX',
    status: 'shipped',
    tagline: 'A credential vault, redesigned.',
    blurb:
      'A password manager built to practice secure CRUD against a relational database — shown here as a redesign concept with a cleaner, modern interface.',
    description: [
      "PassX started as a straightforward CRUD exercise: store and manage credentials safely against a relational backend. The functionality worked, but the original interface didn't do it justice.",
      "The screens shown here are a redesigned concept — same underlying PHP/MySQL logic, reimagined with a cleaner vault-list layout, inline actions, and a calmer visual language, since a password manager should feel private and unremarkable, not busy.",
    ],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    highlights: [
      'Secure create / read / update / delete flow for stored credentials',
      'Redesigned vault-list UI concept — cleaner rows, inline copy/delete actions',
      'Practiced relational CRUD fundamentals against MySQL',
    ],
    images: ['/projects/passx-modern-mockup.svg'],
    links: { code: 'https://github.com/your-username/password-manager', live: null },
  },
  {
    id: 'portfolio-site',
    tag: 'Personal Product',
    title: 'This Portfolio',
    status: 'shipped',
    tagline: 'The site you\'re looking at.',
    blurb:
      'Designed and built from scratch as a product in its own right — a dark, editorial-style showcase for shipped full-stack work.',
    description: [
      "A portfolio is itself a full-stack-adjacent product: it needs a clear narrative, a fast build, and a design that holds attention long enough for someone to actually read the work behind it.",
      'Built with React and Vite, styled with Tailwind, and iterated through several rounds of layout and content — this version leans on a dark, editorial palette with real project screenshots instead of placeholder text.',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Componentized React app — Hero, About, Projects, Skills, Journey, Contact',
      'Dark, professional visual system with scroll-based reveal transitions',
      'Fully responsive across mobile, tablet, and desktop',
    ],
    images: [
      '/projects/portfolio-1-hero.jpg',
      '/projects/portfolio-2-work.jpg',
      '/projects/portfolio-3-skills.jpg',
    ],
    links: { code: 'https://github.com/your-username/portfolio', live: null },
  },
]

export const skillGroups = [
  {
    title: 'Languages & Core',
    items: ['JavaScript', 'PHP', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React JS', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'REST APIs', 'Authentication', 'MVC Architecture'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'Schema Design', 'Query Optimization', 'Migrations'],
  },
  {
    title: 'Tools & Environment',
    items: ['GitHub', 'VS Code', 'Postman', 'InfinityFree / Hosting'],
  },
]

export const journey = [
  {
    stage: 'The Start',
    title: 'Learned to code with structure',
    body: 'Started with the fundamentals of programming and web basics — HTML, CSS, and logic before frameworks.',
  },
  {
    stage: 'Going Further',
    title: 'Picked up React and Laravel',
    body: 'Moved from static pages to full applications, learning component-based frontends and MVC backends.',
  },
  {
    stage: 'The Shift',
    title: 'Started building full products',
    body: 'Began connecting frontend, backend, and database into complete systems instead of isolated exercises.',
  },
  {
    stage: 'Shipping',
    title: 'Deployed real projects',
    body: 'Took Skill Hive and Vendo from local development to database-backed, production-shaped applications.',
  },
  {
    stage: 'Now',
    title: 'Designing TrustLocal, looking for my first role',
    body: "Graduating in 2026, currently building a marketplace with a real trust-scoring engine, and ready to bring a full-stack mindset to a team building real products.",
  },
]
