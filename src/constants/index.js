import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  shopify,
  docker,
  graphgl,
  threejs,
  enigma,
  ansu,
  first_advantage,
  uon,
  enigmaBanner,
  smartEdge,
  ansuSite,
  ansuMarketplace,
  awsMicroservices,
  coupleCaller,
  jobsApi,
  cocktailsDb,
  careerMngt,
  manuchoMaps,
  financeCopilot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Shopify Expert",
    icon: creator,
  },
];

// Do not extend array -> causes THREE.js error (Context lost: Too many active WebGL contexts)
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GraphQL",
    icon: graphgl,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "shopify",
    icon: shopify,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Enigma Big Data Labs",
    icon: enigma,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ANSU",
    icon: ansu,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js, Remix.js and other related technologies.",
      "Research on best practises in areas such as UI/UX experience within THE E-commerce community",
      "Mentor young and talented junior developers on industry best practises as well as teach them new concepts",
      "Use GraphQL in order to connect to Shopify's Admin API as well as Storefront API to access Shopify's internal ecosystem",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "First Advantage Consulting",
    icon: first_advantage,
    iconBg: "#383E56",
    date: "July 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Research on Miscrosoft Azure in order to find the best possible solutions to implement required business requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "University of Nairobi",
    icon: uon,
    iconBg: "#E6DEDD",
    date: "April 2021 - July 2021",
    points: [
      "Developing and maintaining a career management system using Python, Django and other related technologies.",
      "Reporting progress to the Dean of Students and receiving feedback which I used to make necessary changes",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Finance Copilot",
    description:
      "An AI-based project that enables users have better insights into their finances. Users upload transactions and then can query the AI agent using natural language questions such as 'How much did I spend last month?'. The AI agent genrates responses and even charts depending on the user's questions",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "orange-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase(SQL)",
        color: "orange-text-gradient",
      },
      {
        name: "GenerativeAI",
        color: "green-text-gradient",
      },
    ],
    image: financeCopilot,
    source_code_link: "https://finance-copilot.netlify.app/",
  },
  {
    name: "Manucho Maps",
    description:
      "A web application based on Google Maps enabling users search for locations as well as see traffic congestion on the road to said location. I used the JavaScript Maps API as well as Places API offered by Google Cloud.",
    tags: [
      {
        name: "Google Cloud",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: manuchoMaps,
    source_code_link: "https://manucho-maps.netlify.app/",
  },
  {
    name: "Enigma Website",
    description:
      "A fully responsive, user-friendly and aethetically pleasing website. I collaborated with the UI/UX team in order to implement the company website based on Figma designs generated by the UI designers.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: enigmaBanner,
    source_code_link: "https://enigmabigdatalabs.com/",
  },
  {
    name: "Smart Edge",
    description:
      "The smart edge mobile app is installed on the device and a code is generated on startup of the app. This code is then input on the web application and the device is successfully onboarded. Every 5 minutes the POS device now sends information like location, battery level, wifi connectivity etc...",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "WebSockets",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "blue-text-gradient",
      },
    ],
    image: smartEdge,
    source_code_link: "https://edge.enigmadevops.com/",
  },
  {
    name: "Ansu E-commerce",
    description:
      "An e-commerce platform built on Shopify while using Hydrogen (Shopify's version of Remix) as the Headless UI to build the frontend application. The e-commerce platform connects to Shopify's APIs through GraphQL.",
    tags: [
      {
        name: "Remixjs",
        color: "blue-text-gradient",
      },
      {
        name: "Shopify",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: ansuSite,
    source_code_link: "https://www.ansu.co/",
  },
  {
    name: "Ansu Marketplace",
    description:
      "An platform built to enable sellers upload and manage products sold on the Ansu e-commerce platform. Delivery and logistics are all handled by Ansu. Products are approved before going live and sellers get notifications when an order is placed as well as the ability to add creit card or mobile payment information in order to withdraw funds",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "FCM",
        color: "pink-text-gradient",
      },
      {
        name: "RestApi",
        color: "orange-text-gradient",
      },
    ],
    image: ansuMarketplace,
    source_code_link: "https://sell.ansu.co/auth/sign-in",
  },
  {
    name: "Couple Caller",
    description:
      "This is a real-time Full-Stack application that enables users video call their significant other while providing a simple yet elegant user inter-face and high quality video as well as audio output.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "SocketIO",
        color: "pink-text-gradient",
      },
      {
        name: "WebRTC",
        color: "orange-text-gradient",
      },
      {
        name: "Heroku",
        color: "blue-text-gradient",
      },
      {
        name: "Netlify",
        color: "green-text-gradient",
      },
    ],
    image: coupleCaller,
    source_code_link: "https://couple-caller.netlify.app/",
  },
  {
    name: "Cocktails DB",
    description:
      "This is a React.js project that implements a simple user interface that could in turn increase the user experience of searching for cocktails by up to 80%. By using a third-party API, the user is able to search for a cocktail and even get the ingredients of how to make it. It is hosted on Netlify and uses a CI/CD pipeline to push updates to the production site",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ThirdPartyApi",
        color: "pink-text-gradient",
      },
      {
        name: "CI/CD",
        color: "orange-text-gradient",
      },
    ],
    image: cocktailsDb,
    source_code_link: "https://cocktails-react-manucho.netlify.app/",
  },
  {
    name: "Microservice API",
    description:
      " This is an implementation of micro-services through containerization aimed at improving efficiency, availability and reducing latency of a Node application. It was deployed on AWS using the services: ECR and ECS. Infrastructure of the application was exclusively maintained using Terraform with the help of AWS Tools for PowerShell",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
      {
        name: "Nginx",
        color: "blue-text-gradient",
      },
      {
        name: "AmazonAWS",
        color: "orange-text-gradient",
      },
    ],
    image: awsMicroservices,
  },
  {
    name: "Jobs API",
    description:
      "This is an API which flexibly uses either RESTful architecture or GraphQL to query data from the database. It is implemented and deployed on AWS using the services (Elastic Beanstalk, CodePipeline) whereby CodePipeline was connected to my public GitHub repo via a webhook to ensure CI/CD is implemented",
    tags: [
      {
        name: "Expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "AmazonAWS",
        color: "orange-text-gradient",
      },
    ],
    image: jobsApi,
  },
  {
    name: "Career Management",
    description:
      "This is a career management system for a local university in Kenya (University of Nairobi) that enables connecting of students with career opportunities such as jobs and internships. I was able to implement automation of of activities such adding of university logo to curricula vitae in PDF form.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "SMTP",
        color: "pink-text-gradient",
      },
    ],
    image: careerMngt,
  },
];

export { services, technologies, experiences, testimonials, projects };
