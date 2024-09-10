export class Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  gitHubLink: string;

  constructor(title: string, description: string, image: string, link: string, gitHubLink: string, tags: string[] = []) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    this.gitHubLink = gitHubLink;
    this.tags = tags;
  }
}

const projects: Project[] = [
  new Project(
    "SnapTask",
    "WBS Coding School final project - SnapTask is a versatile SaaS platform that uses QR code technology to streamline task management for businesses and households. This repository contains the frontend code for SnapTask, built using React, Vite, and Tailwind CSS. The platform provides a comprehensive admin dashboard for managing tasks, users, and areas, while also offering a mobile-friendly interface for staff to easily interact with tasks.",
    "https://i.gyazo.com/0fd67c66dac08d472af11cc1722f7d5d.png",
    "https://app-snaptask.onrender.com/",
    "https://serhii-tyshchenko.netlify.app/",
    ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "DaisyUI"]
  ),
  new Project(
    "Pokemon game",
    `Simple Pokemon card game built with React, Vite, and Tailwind CSS.
     The game fetches data from the Pokemon API and allows users to battle against the computer.
     The game provides a fun and interactive experience for users.
     The leaderboard feature allows users to track their scores and compete with other players.`,
    "https://i.gyazo.com/475f3b8d8fc81eda42cf073ddde1b194.png",
    "https://pokemon-battlegame.onrender.com/",
    "https://serhii-tyshchenko.netlify.app/",
    ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
  ),
  new Project(
    "TMDB Movie website",
    "This is a movie website that fetches data from the TMDB API. The website provides a user-friendly interface for users to browse movies, view movie details, and search for movies.",
    "https://i.gyazo.com/cebd23f48200db23afeccbe5676ad5ff.jpg",
    "https://movie-diary-r.onrender.com/",
    "https://serhii-tyshchenko.netlify.app/",
    ["React.js", "Vite", "Tailwind CSS", "TMDB API"]
  ),
];

export default projects;
