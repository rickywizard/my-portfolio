import demarj from '../assets/images/demarj.png';
import portfolio from '../assets/images/portfolio.png';
import movtricket from '../assets/images/movtricket.png';
import dcontest from '../assets/images/dcontest.png';
import cheeter from '../assets/images/cheeter.png';

export type Project = {
  name: string;
  description: string;
  image: string;
  github: string;
};

export const projects: Project[] = [
  {
    name: 'DEmaRJ',
    description:
      'Android mobile application as Open Pre Order Shop platform. Created using Kotlin and Firebase.',
    image: demarj,
    github: 'https://github.com/rickywizard/demarj-mobile',
  },
  {
    name: 'MovTricket',
    description:
      'Cinema ticket booking application backend created using Go and microservices architecture. Utilizing gRPC for communication between services.',
    image: movtricket,
    github: 'https://github.com/rickywizard/cinema-microservices',
  },
  {
    name: 'DContest',
    description:
      "Introducing D'Contest, an ultimate contest voting platform designed to host exciting contests and empower the community.",
    image: dcontest,
    github: 'https://github.com/rickywizard/DContest',
  },
  {
    name: 'Cheeter',
    description: 'A social media app like X (twitter) built with MERN stack.',
    image: cheeter,
    github: 'https://github.com/rickywizard/cheeter',
  },
  {
    name: 'Portfolio Website',
    description: 'Magical wizard-themed portfolio built with React.',
    image: portfolio,
    github: 'https://github.com/youruser/portfolio-site',
  },
];
