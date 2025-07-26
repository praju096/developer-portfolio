import profilePhoto from '../assets/Profile.png'
export const personalInfo = {
  name: "Prajesh Prajapati",
  title: "MERN Stack Developer & AI/ML Enthusiast",
  location: "Gorwa, Vadodara",
  email: "prajesh.prajapati1006@gmail.com",
  phone: "+91 9979866612",
  linkedin: "https://www.linkedin.com/in/prajesh-prajapati-3358191b6",
  github: "https://github.com/praju096",
  downloadcv: "https://drive.google.com/file/d/1xf6M7WiQ8JcTWBIjw54qSBuoJ9E0jb5i/view?usp=sharing",
  summary:
    "Aspiring and self-motivated MERN Stack Developer with a solid understanding of full-stack web development using MongoDB, Express.js, React.js, and Node.js. Skilled in building dynamic, responsive, and scalable web applications with clean and maintainable code. Quick learner with excellent problem-solving skills, a collaborative mindset, and a keen interest in learning new technologies and best practices in software development.",
  profileImage: profilePhoto,
};

export const skills = {
  frontend: ["HTML5/CSS3", "React.js", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "Postman", "Visual Studio Code"],
  additional: ["Python", "AI/ML", "Data Science", "C & C++", "Java", "DSA"],
};

export const skillLevels = [
  { name: "MERN Stack Development", level: 90, color: "neon-green" },
  { name: "RESTful API Development", level: 85, color: "neon-blue" },
  { name: "Database Management", level: 82, color: "neon-pink" },
  { name: "AI/ML & Python", level: 78, color: "neon-green" },
  { name: "Responsive Design", level: 88, color: "neon-blue" },
  { name: "Version Control (Git)", level: 85, color: "neon-pink" },
];

export const projects = [
  {
    id: 1,
    title: "Vimet Chat Application",
    period: "2024-2025",
    description:
      "Vimet Chat App is a real-time messaging application developed using the MERN stack. It allows users to register, log in securely with authentication, and chat instantly in one-to-one or group conversations. Real-timecommunication is achieved using Socket.IO, while the frontend is built with React and styled with Bootstrap fora responsive user experience. The backend handles user management and messaging logic using Express.js and Node.js, with MongoDB used for storing chat data.",
    technologies: [
      "React.js",
      "Socket.IO",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "Node.js",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "web",
    githubcode: "https://github.com/praju096/vimetchatapp",
  },
  {
    id: 2,
    title: "VANET:Improving Routing Reliability Of AODV Protocol (ADAS)",
    period: "2024-2025",
    description:
      "Developed and implemented an enhanced AODV routing protocol (R-AODV) for Vehicular Ad Hoc Networks(VANETs) to improve communication reliability in dynamic traffic environments. The protocol evaluates neighbor nodes based on real-time parameters such as speed, signal strength (RSSI),delay, and congestion to compute a reliability score used during route selection. Simulated the system using NS-3 and SUMO, achieving improvements in packet delivery ratio, route stability and throughput over standard AODV.",
    technologies: ["NS-3 Simulation", "SUMO", "C++", "Network Protocols", 'Python', 'NumPy', 'Pandas', 'Machine Learning'],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "research",
    githubcode: "https://github.com/praju096/Vanet-ImproveAodvProtocol",
  },
  {
    id: 3,
    title: "Book Store Application",
    period: "2024",
    description:
      "Full-stack book store application with user authentication, book listing, and collection management. Features CRUD operations, REST APIs, and responsive design for optimal user experience.",
    technologies: [
      "MERN Stack",
      "REST API",
      "Authentication",
      "CRUD Operations",
      "Bootstrap",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "web",
    githubcode: "https://github.com/praju096/BookStore-MERN-stack",
  },
  {
    id: 4,
    title: "Research Work On Virtual Migration In Cloud Computing",
    period: "2023",
    description:
      "Implemented research more than 7 different DDOS attack on cloud infrastructure as well as applied virtualization on cloud services.Thoroughly analyzed a wide array of cloud attack detection techniques to fortify cybersecurity defenses,fostering a preemptive strategy to threat mitigation. Dedicatedly mastered migration pre-copy and post-copy algorithms strategies to optimize cloud infrastructure efficiency and enhance data migration processes, achieving notable improvements in system performance and resource utilization.",
    technologies: [
      "Cloud Computing",
      "Virtualization",
      "Security Analysis",
      "Migration Algorithms",
      "NS3",
      "Python",
      "Linux",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "research",
    githubcode: "https://github.com/praju096/studyinvirtualmigrationincloudcomputing",
  },
  {
    id: 5,
    title: "Sports Shop E-commerce SPORTHUB",
    period: "2021-2022",
    description:
      "Dynamic sports shop application with personalized recommendations and intuitive admin dashboard. Features comprehensive product management, user authentication, and responsive design.",
    technologies: ["Node.js", "MySQL", "Admin Dashboard", "React.js", "Express.js", "Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "web",
    githubcode: "https://github.com/praju096/sporthubfrontend",
  },
];

export const education = [
  {
    degree: "Master of Engineering",
    field: "Computer Engineering",
    institution: "Charotar University of Science and Technology",
    location: "Changa, Anand",
    period: "2023 - 2025",
    cgpa: "8.92/10",
    description:
      "Specialized in advanced computer engineering concepts with focus on MERN stack development, cloud computing, and network protocols. Maintained exceptional academic performance with 8.92 CGPA.",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    institution: "Parul University",
    location: "Waghodia, Vadodara",
    period: "2019 - 2023",
    cgpa: "8.24/10",
    description:
      "Strong foundation in computer science fundamentals, data structures, algorithms, and web development. Completed with excellent academic record and developed multiple projects.",
  },
];

export const achievements = [
  {
    title: "Code Debugging Competition",
    rank: "13th Rank",
    participants: "500 participants",
    date: "August 2021",
    description:
      "Demonstrated exceptional problem-solving skills and attention to detail. Enhanced troubleshooting abilities and deepened understanding of algorithms and data structures.",
    icon: "trophy",
  },
  {
    title: "Cybersecurity Expertise",
    status: "Advanced Knowledge",
    field: "Digital Security",
    date: "August 2020 - Present",
    description:
      "Acquired essential knowledge and skills to safeguard digital assets against cyber threats. Specialized in DDOS attack analysis and cloud security mechanisms.",
    icon: "shield-alt",
  },
];

export const certifications = [
  "Python",
  "Data Science",
  "C & C++",
  "Java",
  "Data Structure and Algorithms",
  "Web Development",
];

export const training = {
  company: "IT Calibre Pvt Ltd",
  duration: "8 months",
  specialization: "Web Development",
};

export const softSkills = ["Resilience", "Adaptability", "Self-Motivation"];

export const languages = [
  "English (Fluent)",
  "Hindi (Fluent)",
  "Gujarati (Native)",
];
