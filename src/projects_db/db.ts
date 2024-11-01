export class Project {
  id: string;
  title: string;
  description: string;
  projectInfo: Map<string, string>;
  tags: string[];
  image: string;
  link: string;
  gitHubLink: GitHubProject[];

  constructor(
    title: string,
    description: string,
    image: string,
    link: string,
    gitHubLink: GitHubProject[],
    tags: string[] = [],
    projectInfo: [string, string][]
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    this.gitHubLink = gitHubLink;
    this.tags = tags;
    this.projectInfo = new Map<string, string>(projectInfo);
  }
}

export enum RepoType {
  "Frontend Repo",
  "Backend Repo",
}

class GitHubProject {
  type: RepoType;
  url: string;

  constructor(type: RepoType, url: string) {
    this.type = type;
    this.url = url;
  }
}

const projects: Project[] = [
  new Project(
    "Teppalu",
    "Teppalu - a full-stack E-Commerce website, where users can browse different rugs, add them to wishlist and cart. The platform provides a comprehensive admin panel for managing taxonomy like colors,sizes and also products and view orders and users. The website is also offering a mobile-friendly responsive UI.",
    "https://i.gyazo.com/9269b862c35c3cd76b5586bf838f4a35.jpg",
    "https://teppalu.onrender.com/",
    [
      new GitHubProject(RepoType["Frontend Repo"], "https://github.com/hexzoner/hex-eCommerce-fe"),
      new GitHubProject(RepoType["Backend Repo"], "https://github.com/hexzoner/eCommerce-be"),
    ],
    ["React.js", "Typescript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "DaisyUI"],
    [
      [
        "EN",
        "Teppalu - a full-stack E-Commerce website, where users can browse different rugs, add them to their wishlist and cart. The platform provides an admin panel for managing product taxonomies like colors, sizes and also products and view orders and users. The website is also offering a mobile-friendly responsive UI.",
      ],
      [
        "DE",
        "Teppalu - eine Full-Stack-E-Commerce-Website, auf der Benutzer verschiedene Teppiche durchsuchen, sie ihrer Wunschliste und ihrem Warenkorb hinzufügen können. Die Plattform bietet ein Admin-Panel zur Verwaltung von Produkt-Taxonomien wie Farben, Größen und auch Produkten sowie zum Anzeigen von Bestellungen und Benutzern. Die Website bietet auch eine benutzerfreundliche, responsive Benutzeroberfläche.",
      ],
    ]
  ),
  new Project(
    "SnapTask",
    "WBS Coding School final project - SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households. This repository contains the frontend code for SnapTask, built using React, Vite, and Tailwind CSS. The platform provides a comprehensive admin dashboard for managing tasks, users, and areas, while also offering a mobile-friendly interface for staff to easily interact with tasks.",
    "https://i.gyazo.com/0fd67c66dac08d472af11cc1722f7d5d.png",
    "https://app-snaptask.onrender.com/",
    [
      new GitHubProject(RepoType["Frontend Repo"], "https://github.com/SebSchoeneberger/SnapTask-Fe"),
      new GitHubProject(RepoType["Backend Repo"], "https://github.com/hexzoner/final-project-be"),
    ],
    ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "DaisyUI"],
    [
      [
        "EN",
        "The result of the close, day-to-day collaboration of four team members, WBS Coding School's final project, SnapTask, is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households. The platform provides a comprehensive admin dashboard for managing tasks, users, and areas, while also offering a mobile-friendly interface for staff to easily interact with tasks.",
      ],
      [
        "DE",
        "Das Ergebnis der engen, täglichen Zusammenarbeit von vier Teammitgliedern, das Abschlussprojekt der WBS Coding School, SnapTask, ist eine vielseitige SaaS-Plattform, die QR-Code-Technologie nutzt, um das Aufgabenmanagement für Unternehmen und Haushalte zu optimieren. Die Plattform bietet ein umfassendes Admin-Dashboard zur Verwaltung von Aufgaben, Benutzern und Bereichen und bietet gleichzeitig eine benutzerfreundliche Oberfläche für Mitarbeiter, um einfach mit Aufgaben zu interagieren.",
      ],
    ]
  ),
  new Project(
    "Pokemon game",
    `Simple Pokemon card game built with React, Vite, and Tailwind CSS.
     The game fetches data from the Pokemon API and allows users to battle against the computer.
     The game provides a fun and interactive experience for users.
     The leaderboard feature allows users to track their scores and compete with other players.`,
    "https://i.gyazo.com/475f3b8d8fc81eda42cf073ddde1b194.png",
    "https://pokemon-battlegame.onrender.com/",
    [
      new GitHubProject(RepoType["Frontend Repo"], "https://github.com/ktwd52/pokemon-battlegame-fe"),
      new GitHubProject(RepoType["Backend Repo"], "https://github.com/ktwd52/pokemon-battlegame-be"),
    ],
    ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    [
      [
        "EN",
        "Simple Pokemon card game built with React, Vite, and Tailwind CSS. The game fetches data from the Pokemon API and allows users to battle against the computer. The game provides a fun and interactive experience for users. The leaderboard feature allows users to track their scores and compete with other players.",
      ],
      [
        "DE",
        "Einfaches Pokemon-Kartenspiel, das mit React, Vite und Tailwind CSS erstellt wurde. Das Spiel ruft Daten von der Pokemon-API ab und ermöglicht es Benutzern, gegen den Computer zu kämpfen. Das Spiel bietet Benutzern ein unterhaltsames und interaktives Erlebnis. Die Ranglistenfunktion ermöglicht es Benutzern, ihre Punktzahlen zu verfolgen und mit anderen Spielern zu konkurrieren.",
      ],
    ]
  ),
  new Project(
    "TMDB Movie website",
    "This is a movie website that fetches data from the TMDB API. The website provides a user-friendly interface for users to browse movies, view movie details, and search for movies.",
    "https://i.gyazo.com/cebd23f48200db23afeccbe5676ad5ff.jpg",
    "https://movie-diary-r.onrender.com/",
    [new GitHubProject(RepoType["Frontend Repo"], "https://github.com/hexzoner/movies-website")],
    ["React.js", "Vite", "Tailwind CSS", "TMDB API"],
    [
      [
        "EN",
        "This is a movie website that fetches data from the TMDB API. The website provides a user-friendly interface for users to browse movies, view movie details, and search for movies.",
      ],
      [
        "DE",
        "Dies ist eine Filmwebsite, die Daten von der TMDB-API abruft. Die Website bietet eine benutzerfreundliche Oberfläche, mit der Benutzer Filme durchsuchen, Filmdetails anzeigen und nach Filmen suchen können.",
      ],
    ]
  ),
];

export default projects;
