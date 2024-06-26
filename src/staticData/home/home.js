import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import ExternalLinkIcon from "@/src/components/icons/home/ExternalLinkIcon";
import {
  FaBlog,
  FaBriefcase,
  FaEnvelopeOpen,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaGraduationCap,
  FaRegEnvelopeOpen,
  FaVoicemail,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { BiCheckDouble, BiCommentCheck } from "react-icons/bi";

import figmaImage from "@/public/assets/img/skill/figma.svg";
import webflowImage from "@/public/assets/img/skill/webflow.svg";
import tailwindImage from "@/public/assets/img/skill/tailwind.svg";
import htmlImage from "@/public/assets/img/skill/html.svg";
import cssImage from "@/public/assets/img/skill/css.svg";
import jsImage from "@/public/assets/img/skill/js.svg";
import jqueryImage from "@/public/assets/img/skill/jquery.svg";
import csharpImage from "@/public/assets/img/skill/csharp.svg";
import javaImage from "@/public/assets/img/skill/java.svg";
import phpImage from "@/public/assets/img/skill/php.svg";
import nodejsImage from "@/public/assets/img/skill/nodejs.svg";
import golangImage from "@/public/assets/img/skill/golang.svg";
import pythonImage from "@/public/assets/img/skill/python.svg";
import reactImage from "@/public/assets/img/skill/react.svg";
import vuejsImage from "@/public/assets/img/skill/vuejs.svg";
import laravelImage from "@/public/assets/img/skill/laravel.svg";
import awsImage from "@/public/assets/img/skill/aws.svg";
import googleCloudImage from "@/public/assets/img/skill/google-cloud.svg";
import flutterImage from "@/public/assets/img/skill/flutter.svg";
import swiftImage from "@/public/assets/img/skill/swift.svg";
import sqlServerImage from "@/public/assets/img/skill/sql-server.svg";
import mongoImage from "@/public/assets/img/skill/mongodb.svg";
import mysqlImage from "@/public/assets/img/skill/mysql.svg";

import partner1Image from "@/public/assets/img/partners/logo1.svg";
import partner2Image from "@/public/assets/img/partners/logo2.svg";
import partner3Image from "@/public/assets/img/partners/logo3.svg";
import partner4Image from "@/public/assets/img/partners/logo4.svg";

import userImage from "@/public/assets/img/user-sidebar-thumb.png";
import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.png";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "@/public/assets/img/blog/article1.png";
import blog1Image from "@/public/assets/img/blog/article1.png";
import blog2Thumbnail from "@/public/assets/img/blog/article2.png";
import blog2Image from "@/public/assets/img/blog/article2.png";
import blog3Thumbnail from "@/public/assets/img/blog/article3.png";
import blog3Image from "@/public/assets/img/blog/article3.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import { IoHomeOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDocker, faEnvira, faFacebook, faGithub, faGithubSquare, faLinkedin, faLinkedinIn, faMailchimp, faOpencart, faStackOverflow, faEnvelope, faMandalorian, faSignalMessenger } from "@fortawesome/free-brands-svg-icons";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "INTRODUCE",
  },
  heading: {
    heading1: "Hi there! I'm",
    heading2: "Francisco Pérez",
  },
  desc: (
    <p>
      I am a{" "}
      <span className="font-medium text-black dark:text-white/90">
        Software Developer
      </span>{" "}

      with over {" "}
      <span className="font-medium text-black dark:text-white/90">
        5 years of expierence
      </span>{" "} as programmer.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Available for work",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "Full Time Job",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
  ],
};

export const partners = [
  {
    imgUrl: partner1Image,
    altText: "#OpenToWork",
    link: "#",
  },
];

export const technologies = [
  {
    id: 1,
    title: "HTML5 & CSS3",
    skill: "94",
    url: "#",
  },
  {
    id: 2,
    title: "Bootstrap",
    skill: "98",
    url: "#",
  },
  {
    id: 3,
    title: "TailwindCSS",
    skill: "90",
    url: "#",
  },
];

export const userDetails = [
  {
    field: "Mobile",
    value: "(+52) 961 372 34 12",
  },
  {
    field: "Email",
    value: "devfcph@gmail.com",
  },
  {
    field: "Age",
    value: "26",
  },
  {
    field: "Languages",
    value: [
      {
        label: "Spanish",
        description: "Native speaker"
      },
      {
        label: "English",
        description: "Professional working profiency"
      },
    ]
  },
  {
    field: "Hobbies",
    value: [
      {
        label: "Cycling",
        description: ""
      },
      {
        label: "Boxing",
        description: ""
      },
      {
        label: "Learning",
        description: ""
      },
      {
        label: "Concerts",
        description: ""
      },
    ]
  },
  {
    field: "More about me",
    value: [
      {
        label: "Credly",
        description: "",
        uri: "https://www.credly.com/users/francisco-perez-hernandez/badges"
      },
      {
        label: "Reddit",
        description: "",
        uri: "https://www.reddit.com/user/devfcph/"
      },
      {
        label: "StackOverflow",
        description: "",
        uri: "https://stackoverflow.com/users/22437732/francisco-p%C3%A9rez-hern%C3%A1ndez"
      },
      {
        label: "Telegram",
        description: "",
        uri: "https://t.me/cris_dev"
      },
    ]
  },
];

export const userDetailsSidebar = {
  userImage: userImage,
  userImageLight: userImageLight,
  userName: "Francisco Pérez Hernández",
  designations: ["Software Developer", "Backend Developer", "Fullstack Developer", "Database Administrator"],
  basicInfo: [
    {
      id: 1,
      field: "Residence",
      value: "Mexico",
    },
    {
      id: 2,
      field: "City",
      value: "Mexico City",
    },
    {
      id: 3,
      field: "Open to work",
      value: "100%",
    },
    {
      id: 4,
      field: "Email",
      value: "devfcph@gmail.com",
    },
    {
      id: 5,
      field: "Mobile",
      value: "+52 961 372 34 12",
    },
  ],
  skillsInfo: [
    {
      id: 1,
      name: ".NET",
      value: 90,
    },
    {
      id: 2,
      name: "JAVA",
      value: 80,
    },
    {
      id: 3,
      name: "SQL",
      value: 90,
    },
    {
      id: 4,
      name: "PHP",
      value: 90,
    },
  ],
  socialMedia: [
    {
      id: 1,
      value: "LinkedIn",
      uri: "https://www.linkedin.com/in/cris-hernandez-fcphdev",
      icon: faLinkedin
    },
    {
      id: 2,
      value: "GitHub",
      uri: "https://github.com/devfcph",
      icon: faGithub
    },
    {
      id: 3,
      value: "Docker",
      uri: "https://hub.docker.com/u/crishdzdev",
      icon: faDocker
    },
    {
      id: 4,
      value: "Email",
      uri: "mailto:devfcph@gmail.com",
      icon: faSignalMessenger
    },
  ]
};

export const projectExperiences = [
  {
    title: "Years Of Experience",
    count: 5,
    postFix: true,
  },
  {
    title: "Public repositories",
    count: 25,
    postFix: true,
  },
  {
    title: "Solved bugs",
    count: 200,
    postFix: true,
  }
];

export const services = {
  servicesHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SERVICES",
    heading: "My",
    coloredHeading: "Services",
    description:
      "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute.",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "UI/UX Design",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <UiUxIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "Web Development",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <WebDevIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "SEO / Marketing",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <SeoIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "Branding & Strategy",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <BrandingIcon />,
    },
  ],
};



export const certificates = {
  certificatesHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "CERTIFACTIONS",
    heading: " ",
    coloredHeading: "Certifications",
    description:
      "\"The ability to learn is a gift; the capacity to learn is a skill; the willingness to learn is a choice.\" - Brian Herbert",
  },
  certificatesData: [
    {
      id: 1,
      number: "May, 2023",
      title: "Cloud Arquitecture",
      desc: "Google Cloud Skills Boost",
      icon: <ExternalLinkIcon />,
      uri: "https://www.cloudskillsboost.google/public_profiles/a25389ce-740e-48a4-bb67-c3296f58f8aa/badges/3752007?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      id: 2,
      number: "May, 2023",
      title: "Google Cloud Essentials",
      desc: "Google Cloud Skills Boost",
      icon: <ExternalLinkIcon />,
      uri: "https://www.cloudskillsboost.google/public_profiles/a25389ce-740e-48a4-bb67-c3296f58f8aa/badges/3778980?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      id: 3,
      number: "May, 2023",
      title: "Cloud Engineering",
      desc: "Google Cloud Skills Boost",
      icon: <ExternalLinkIcon />,
      uri: "https://www.cloudskillsboost.google/public_profiles/a25389ce-740e-48a4-bb67-c3296f58f8aa/badges/3751266?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      id: 4,
      number: "Jun, 2022",
      title: "Introduction to IoT",
      desc: "Cisco Academy",
      icon: <ExternalLinkIcon />,
      uri: "https://www.credly.com/badges/49f334de-98a8-4f7e-a62d-9eb58265f656?source=linked_in_profile"
    },
    {
      id: 5,
      number: "May, 2022",
      title: "Scrum Fundamentals Certified",
      desc: "SCRUMStudy",
      icon: <ExternalLinkIcon />,
      uri: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-FranciscoCrist%C3%B3balP%C3%A9rezHern%C3%A1ndez.-915871.pdf"
    },
    {
      id: 5,
      number: "Sep, 2023",
      title: "AWS Educate Machine Learning Foundations",
      desc: "Amazon Training and Certification",
      icon: <ExternalLinkIcon />,
      uri: "https://www.credly.com/badges/bdbb1122-e22b-428c-9fcd-0a97a2c60b10/public_url"
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "My",
    coloredHeading: "Tech Skills",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  backendSkills: [
    {
      image: csharpImage?.src,
      percent: 90,
      name: "C#",
    },
    {
      image: javaImage?.src,
      percent: 85,
      name: "Java",
    },
    {
      image: phpImage?.src,
      percent: 90,
      name: "PHP",
    },
    {
      image: nodejsImage?.src,
      percent: 95,
      name: "NodeJs",
    },
    {
      image: golangImage?.src,
      percent: 95,
      name: "Golang",
    },
    {
      image: pythonImage?.src,
      percent: 75,
      name: "Python",
    },
  ],
  frontendSkills: [
    {
      image: reactImage?.src,
      percent: 90,
      name: "React",
    },
    {
      image: vuejsImage?.src,
      percent: 85,
      name: "VueJs",
    },
    {
      image: laravelImage?.src,
      percent: 90,
      name: "Laravel",
    },
    {
      image: "",
      percent: 85,
      name: "",
    },
  ],
  databaseSkills: [
    {
      image: sqlServerImage?.src,
      percent: 90,
      name: "SQL Server",
    },
    {
      image: mysqlImage?.src,
      percent: 85,
      name: "MySql",
    },
    {
      image: mongoImage?.src,
      percent: 90,
      name: "Mongo DB",
    },
    {
      image: "",
      percent: 85,
      name: "",
    },
  ],
  mobileSkills: [
    {
      image: swiftImage?.src,
      percent: 90,
      name: "Swift Native",
    },
    {
      image: flutterImage?.src,
      percent: 85,
      name: "Flutter",
    },
    {
      image: "",
      percent: 90,
      name: "",
    },
    {
      image: "",
      percent: 85,
      name: "",
    },
  ],
  cloudSkills: [
    {
      image: awsImage?.src,
      percent: 90,
      name: "Amazon Web Services",
    },
    {
      image: googleCloudImage?.src,
      percent: 85,
      name: "Google Cloud Platform",
    },
    {
      image: "",
      percent: 90,
      name: "",
    },
    {
      image: "",
      percent: 85,
      name: "",
    },
  ],
};

export const resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "RESUME",
    heading: "Work",
    coloredHeading: "Experience",
    description:
      "As a software developer, "
      + "I have amassed valuable experience in programming languages such as "
      + "JAVA, C#, Python, TypeScript, Go, PHP, and various other tech stacks. "
      + "Throughout my career, I have consistently demonstrated my ability to share knowledge, take on responsibility, and deliver high-quality work.",
  },
  resumeData: [
    {
      platform: "GRUPO SALINAS",
      duration: "November, 2023 - March, 2024",
      schema: "OnSite",
      position: "Cloud Arquitect",
      description: [
        "Specialized in serverless deployment of services using AWS Lambda, leveraging automatic scalability and operational efficiency.",
        "Executed precise deployment methodologies for instances and various AWS services, employing best practices to guarantee robust and reliable implementations in alignment with project requirements."
      ]
    },
    {
      platform: "GRUPO SALINAS",
      duration: "October, 2022 - November, 2023",
      schema: "Hybrid",
      position: "Java Microservices Developer",
      description: [
        " Extensive experience in breaking down monolithic applications into microservices, using Java and Spring Boot to achieve flexible and easily maintainable architectures.",
        "Utilized Docker and GitLab to create and maintain container-based microservices, providing standardized and secure deployments.",
        "* Priority in implementing Apache Kafka for the creation of efficient and scalable messaging systems, facilitating real-time event transmission among microservices."
      ]
    },
    {
      platform: "GONET AN ORION INNOVATION",
      duration: "July, 2022 - October, 2022",
      schema: "Remote",
      position: "iOS Mobile Developer",
      description: [
        "Conceptualized and crafted user interfaces for iOS applications using Swift, ensuring a seamless and captivating user experience",
      ]
    },
    {
      platform: "GOBIERNO DEL ESTADO DE CHIAPAS",
      duration: "October, 2020 - October, 2022",
      schema: "Hybrid",
      position: "Fullstack Developer",
      description: [
        "Developed the implementation of a comprehensive payroll calculation system for all levels of the government of the state of Chiapas, employing SQL extensively and leveraging stored procedures, functions, and views to ensure efficiency and accuracy in the process.",
        "Developed dynamic web applications using Microsoft SQL Server, ASP.NET Web API, and Vue.js, consistently delivering robust and scalable solutions.",
        "Utilized the adoption of agile software development methodologies, orchestrating Scrum practices to ensure efficient project management and maintain development momentum.",
        "Developed intuitive and immersive user interfaces, driving significant enhancements in user engagement and overall satisfaction."
      ]
    },
    {
      platform: "GLOBAL TRANSFER",
      duration: "June, 2020 - October, 2020",
      schema: "OnSite",
      position: "Fullstack Developer",
      description: [
        "Developed web services with RESTful architecture, using .NET and Microsoft SQL Server for storage",
        "Performing code maintenance and bug fixing in projects developed in both PHP and .NET. This involved identifying and resolving errors to ensure the functionality and stability of the applications at all times",
      ]
    },
    {
      platform: "INDUXSOFT DATA SERVICES",
      duration: "August, 2018 - January, 2020",
      schema: "OnSite",
      position: "Fullstack Developer",
      description: [
        "Developed web services with RESTful architecture, using .NET and Microsoft SQL Server for storage.",
        " Performing code maintenance and bug fixing in projects developed in both PHP and .NET.",
        "Implemented and tested a number of solutions resolving complex data issues while ensuring the robustness and scalability of the code."
      ]
    },
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: " ",
    coloredHeading: "Education",
    description:
      "",
  },
  educationsData: [
    {
      institution: "AUTONOMOUS UNIVERSITY OF CHIAPAS ",
      duration: "2016-2022",
      degree: "Software Development and Technology Engineering Bachelors",
      description:
        "As a Software Development Engineering student at the Autonomous University of Chiapas, I had the opportunity to focus on a wide variety of topics. These included Object Oriented Programming (OOP), structured programming, database management, SOAP and REST services, robotics and artificial intelligence (AI), as well as project management and web application development.",
    },
    {
      institution: "UNIVERSITY OF BOYACA",
      duration: "January 2020, June 2020",
      degree: "Computer Science Exchange Student",
      description:
        "During my exchange period at the University of Boyacá (Colombia), I gained valuable insights and experiences. These included learning programming with Python for Big Data applications, utilizing SQL as a tool for managing large datasets, and mastering project management through agile software development methodologies.",
    },
  ],
};

export const portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "PORTFOLIO",
    heading: "Featured ",
    coloredHeading: "Projects",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1Thumb?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES:",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2Thumb?.src,
        image: portfolioImage2?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3Thumb?.src,
        image: portfolioImage3?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4Thumb?.src,
        image: portfolioImage4?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
  ],
};

export const blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "BLOG",
    heading: "Latest",
    coloredHeading: "Insights",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog3Thumbnail?.src,
        image: blog3Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
  ],
};

export const testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "What",
    coloredHeading: "People Say",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
    {
      id: 2,
      image: author2?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Reddick</span> exceeds
          expectations with top-tier coding skills. Reliable, collaborative, and
          a true asset to any project. Highly recommended
        </div>
      ),
      name: "Mily Martin",
      position: "CEO @IT Theme",
    },
    {
      id: 3,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
  ],
};

export const contactInfo = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTACT",
    heading: "Contact",
    coloredHeading: "Me.",
    description:
      "Hire me :)",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Location",
      data: "Mexico City",
      Icon: <LocationIcon />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "devfcph@gmail.com",
      Icon: <EmailIcon />,
    },
    {
      id: 3,
      field: "Phone",
      data: "(+52) 961 372 34 12",
      Icon: <PhoneIcon />,
    },
  ],
};
