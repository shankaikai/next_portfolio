export const socials = {
  email: "mailto:tiongshankai97@gmail.com",
  github: "https://github.com/shankaikai",
  linkedin: "https://www.linkedin.com/in/shan-kai-tiong/",
};

export const navitems = [
  { title: "About Me", link: "/", icon: "eva:info-fill" },
  { title: "Projects", link: "/projects", icon: "bx:bx-code-alt" },
  { title: "Experience", link: "/experience", icon: "ic:outline-work" },
  { title: "Resume", link: "/resume", icon: "ri:file-paper-2-fill" },
];

export const introductionImages = [
  { path: "/images/esc.jpg", alt: "Elements of Software Construction Group" },
  { path: "/images/coding.jpg", alt: "Computer Structures Coding" },
  { path: "/images/ddp.jpg", alt: "Leadership and Teambuilding Class" },
  { path: "/images/classpict.jpg", alt: "SUTD 2018 Cohort 4" },
];

export const highlightedSkills = [
  "React",
  "Javascript",
  "Typescript",
  "Java",
  "Springboot",
  "Styled Components",
  "MySQL",
  "Python",
  "Express",
  "Android",
];

export const skillsImages = [
  { path: "/images/uniy_1.png", alt: "Volunteering at BizLink" },
  {
    path: "/images/gbtb.jpg",
    alt: "Volunteering at Garden by the Bay",
  },
  { path: "/images/myanmar.jpg", alt: "Road construction in Maubin Myanmar" },
];

export const personalityImages = [
  { path: "/images/cycling.jpg", alt: "Cycling in Coney Island" },
  { path: "/images/board.jpg", alt: "Playing board games" },
  { path: "/images/myanmar_2.png", alt: "Forest in Myanmar" },
  { path: "/images/bali.jpg", alt: "Travelling in Bali with friends" },
];

export const projects = [
  {
    image: "/images/icbs.jpg",
    title: "Professor-Student Consultation Booking System",
    date: "Janurary 2019 - April 2019",
    source:
      "https://github.com/shankaikai/Professor-Student-Consultation-Booking-System",
    descriptions: [
      "Worked in a team of 5 people to improve professor-student consultations.",
      "Created a consultation booking application using Kivi and Firebase in Python.",
      "Enabled easy student tracking by extracting CAN Numbers from students cards using a Raspberry Pi RFID module.",
    ],
    skills: ["Python", "Firebase", "Raspberry Pi"],
  },
  {
    image: "/images/hmm.gif",
    title: "Hidden Markov Model Twitter Analytics",
    date: "September 2020 - December 2020",
    source: "https://github.com/shankaikai/50.007-Machine-Learning-Project",
    descriptions: [
      "Worked in a team of 3 to design a sequence labeling model for informal texts using Hidden Markov Model (HMM) in Python.",
      "Coded HMM algorithm from scratch without packages.",
    ],
    skills: ["Python", "Jupyter"],
  },
  {
    image: "/images/taptapbudget.jpg",
    title: "Tap Tap Budget",
    date: "September 2020 - December 2020",
    source: "https://github.com/tankaye09/500021D",
    descriptions: [
      "Worked with 4 other team members to design and prototype an electronic game, coded in Lucid, FPGA.",
      "Contributed significantly to the algorithm and game design.",
      "The player needed to move and change the colour of the basket to collect the coloured balls.",
    ],
    skills: ["Lucid", "FPGA", "Computer Structures"],
  },
  {
    image: "/images/cheq.png",
    title: "CheQ Restaurant Queuing Android Application",
    date: "September 2020 - December 2020",
    source: "https://github.com/shankaikai/CheQ",
    descriptions: [
      "Worked in a team of 5 people to develop an Android application using Java and Firebase to enable restaurant queuing from anytime and anywhere.",
      "App was selected for $3000 seed funding by Mitsubishi Corporation.",
    ],
    skills: ["Java", "Android", "Firebase", "Figma"],
  },
  {
    image: "/images/singhealth.png",
    title: "SingHealth Retail Audit Web Application",
    date: "January 2021 - April 2021",
    source: "https://github.com/shankaikai/SingHealth-Retail-Audit-Application",
    descriptions: [
      "Worked in a team of 4 people to A full stack web application created using React, Node, Express and MySQL to digitalise the audit process at SingHealth.",
      "Was heavily involved in the user interface, API and database design.",
    ],
    skills: ["React", "Express", "MySQL", "Figma", "Azure", "Heroku"],
  },
  {
    image: "/images/portfoliowebsite.png",
    title: "NextJS Portfolio Website",
    date: "January 2022 - January 2022",
    source: "https://github.com/shankaikai/next_portfolio",
    figma:
      "https://www.figma.com/file/5LSdp7qaIBy2Tw3UgtodBh/Portfolio?node-id=0%3A1",
    descriptions: [
      "Created a NextJs static site to showcase my achievements and projects.",
      "Designed the web interface using Figma.",
      "Utilised Styled Components for styling.",
    ],
    skills: ["React", "NextJs", "Styled Components", "Figma"],
  },
];

export const experiences = [
  {
    company: "Indeed",
    icon: "cib:indeed",
    title: "Software Engineer Intern",
    date: "May 2021 - August 2021",
    descriptions: [
      "Internationalised Indeed’s global employer payment platform and made it available in multiple languages.",
      "Developed unit and integration tests using Mockito and Jest.",
      "Setup Jenkins pipeline for syncing of translation files.",
      "Utilised Jira for project management.",
      "Liaised with localization team for translation requests.",
      "Worked with team on bug fixes and feature improvements.",
    ],
    skills: [
      "React",
      "Typescript",
      "Styled System",
      "Springboot",
      "Java",
      "Jenkins",
      "Jira",
    ],
  },
  {
    company: "DHL Express",
    icon: "fa-brands:dhl",
    title: "Information Technology Intern",
    date: "May 2020 - August 2020",
    descriptions: [
      "Developed a python script to automate sending of email/SMS payment notifications to customers daily using SMTP.",
      "Developed a python script and R Shiny application to draw insights from Customer Service live chat transcripts which helped improve Customer Service agent feedback and training.",
      "Worked with Programme Delivery team to build a website for internal use using ASP Net Core Razor Pages, HTML, CSS, JavaScript, SQL and BootStrap to manage customer on boarding.",
      "Developed an Excel Macro file with VBA to automate billing report generation.",
    ],
    skills: ["Python", "C#", "ASP.NET", "Razor Pages", "VBA", "R Studio"],
  },
];
