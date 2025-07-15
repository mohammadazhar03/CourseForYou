const courseData = {
  "software-development": {
    title: "Software Development",
    description: "Full-stack development training with real-world projects.",
    instructor: {
      name: "Aman Kumar",
      role: "Senior Full Stack Developer",
      photo: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    duration: "6 months",
    price: "₹29,999",
    requirements: [
      "Basic knowledge of computers",
      "Willingness to learn coding",
      "Laptop with good internet connection"
    ],
    syllabus: [
      { week: "Week 1", topic: "HTML & CSS Fundamentals" },
      { week: "Week 2", topic: "JavaScript Basics" },
      { week: "Week 3", topic: "Advanced JavaScript & DOM" },
      { week: "Week 4", topic: "React.js Essentials" },
      { week: "Week 5", topic: "Node.js & Express" },
      { week: "Week 6", topic: "MongoDB & Mongoose" },
      { week: "Week 7", topic: "Authentication & Authorization" },
      { week: "Week 8", topic: "Final Project & Deployment" }
    ]
  },

  "data-science": {
    title: "Data Science",
    description: "Master AI, Python, ML, and analytics skills.",
    instructor: {
      name: "Ritika Sharma",
      role: "Data Scientist at Google",
      photo: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    duration: "4 months",
    price: "₹34,999",
    requirements: [
      "Basic statistics and math",
      "Python programming (beginner)",
      "Interest in data"
    ],
    syllabus: [
      { week: "Week 1", topic: "Python for Data Science" },
      { week: "Week 2", topic: "Data Cleaning & Pandas" },
      { week: "Week 3", topic: "Exploratory Data Analysis" },
      { week: "Week 4", topic: "Intro to Machine Learning" },
      { week: "Week 5", topic: "Supervised & Unsupervised Learning" },
      { week: "Week 6", topic: "NLP & Sentiment Analysis" },
      { week: "Week 7", topic: "Model Deployment" }
    ]
  },

  "cybersecurity": {
    title: "Cybersecurity",
    description: "Learn ethical hacking and secure systems training.",
    instructor: {
      name: "Mohit Rao",
      role: "Security Analyst at Cisco",
      photo: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    duration: "5 months",
    price: "₹31,999",
    requirements: [
      "Basic networking knowledge",
      "Keen interest in hacking",
      "Linux basics"
    ],
    syllabus: [
      { week: "Week 1", topic: "Cybersecurity Fundamentals" },
      { week: "Week 2", topic: "Operating Systems & Linux" },
      { week: "Week 3", topic: "Network Security" },
      { week: "Week 4", topic: "Penetration Testing Tools" },
      { week: "Week 5", topic: "Kali Linux & Metasploit" },
      { week: "Week 6", topic: "OWASP Top 10" }
    ]
  },

  "ui-ux-design": {
    title: "UIUX Design",
    description: "Design intuitive user experiences and beautiful interfaces.",
    instructor: {
      name: "Sneha Jain",
      role: "Product Designer at Adobe",
      photo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    duration: "3 months",
    price: "₹24,999",
    requirements: [
      "Creativity and visual thinking",
      "Basic computer knowledge",
      "Interest in design"
    ],
    syllabus: [
      { week: "Week 1", topic: "Design Principles" },
      { week: "Week 2", topic: "User Research & Personas" },
      { week: "Week 3", topic: "Wireframing with Figma" },
      { week: "Week 4", topic: "Prototyping & Feedback" },
      { week: "Week 5", topic: "UI Design Systems" }
    ]
  },

  "app-development": {
    title: "App Development",
    description: "Build mobile apps using Android, iOS, and cross-platform tools.",
    instructor: {
      name: "Rajeev Malhotra",
      role: "App Engineer at Flipkart",
      photo: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    duration: "4 months",
    price: "₹28,000",
    requirements: [
      "Basic programming experience",
      "Android/iOS devices for testing",
      "Git knowledge"
    ],
    syllabus: [
      { week: "Week 1", topic: "Dart & Flutter Basics" },
      { week: "Week 2", topic: "UI Widgets & Layouts" },
      { week: "Week 3", topic: "State Management" },
      { week: "Week 4", topic: "APIs and JSON Handling" },
      { week: "Week 5", topic: "iOS Build and Deployment" }
    ]
  },

  "cloud-computing": {
    title: "Cloud Computing",
    description: "Master deployment and architecture on major cloud platforms.",
    instructor: {
      name: "Vikram Desai",
      role: "AWS Solutions Architect",
      photo: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    duration: "3.5 months",
    price: "₹30,000",
    requirements: [
      "Basic understanding of servers",
      "Command line proficiency",
      "Interest in infrastructure"
    ],
    syllabus: [
      { week: "Week 1", topic: "Intro to Cloud & Virtualization" },
      { week: "Week 2", topic: "AWS EC2, S3, IAM" },
      { week: "Week 3", topic: "Azure Basics" },
      { week: "Week 4", topic: "GCP & Firebase" },
      { week: "Week 5", topic: "Deployments with CI/CD" }
    ]
  },

  "devops": {
    title: "DevOps",
    description: "Automate CI/CD pipelines and infrastructure with DevOps tools.",
    instructor: {
      name: "Ayesha Khan",
      role: "DevOps Engineer at IBM",
      photo: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    duration: "4 months",
    price: "₹32,500",
    requirements: [
      "Linux and shell scripting basics",
      "Familiarity with Git/GitHub",
      "Cloud basics preferred"
    ],
    syllabus: [
      { week: "Week 1", topic: "Git & GitHub" },
      { week: "Week 2", topic: "Docker Containers" },
      { week: "Week 3", topic: "Kubernetes Basics" },
      { week: "Week 4", topic: "Jenkins Pipelines" },
      { week: "Week 5", topic: "Monitoring & Deployment" }
    ]
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Build smart systems with deep learning and NLP models.",
    instructor: {
      name: "Harshit Mehta",
      role: "AI Engineer at Microsoft",
      photo: "https://randomuser.me/api/portraits/men/58.jpg"
    },
    duration: "6 months",
    price: "₹39,999",
    requirements: [
      "Good grasp of Python",
      "Basic math (algebra, stats)",
      "Linear algebra understanding"
    ],
    syllabus: [
      { week: "Week 1", topic: "AI Basics & History" },
      { week: "Week 2", topic: "Neural Networks & Perceptron" },
      { week: "Week 3", topic: "CNN, RNN, LSTM Models" },
      { week: "Week 4", topic: "NLP & Chatbots" },
      { week: "Week 5", topic: "AI Ethics & Deployment" }
    ]
  },

  "software-testing": {
    title: "Software Testing",
    description: "Learn to test and validate software through automation.",
    instructor: {
      name: "Meera Nair",
      role: "QA Lead at Infosys",
      photo: "https://randomuser.me/api/portraits/women/27.jpg"
    },
    duration: "2.5 months",
    price: "₹18,000",
    requirements: [
      "No coding required for manual testing",
      "Basic browser usage",
      "Interest in software quality"
    ],
    syllabus: [
      { week: "Week 1", topic: "Software Testing Fundamentals" },
      { week: "Week 2", topic: "Manual Testing Techniques" },
      { week: "Week 3", topic: "Automated Testing with Selenium" },
      { week: "Week 4", topic: "Unit Testing with Jest" },
      { week: "Week 5", topic: "Bug Reporting & Tools" }
    ]
  }
};

export default courseData;
