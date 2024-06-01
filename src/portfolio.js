
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Viplav Khode",
  title: "Hi all, I'm Viplav",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ViplavKhode",
  linkedin: "https://www.linkedin.com/in/viplavkhode/",
  gmail: "vnkhode@gmail.com",
  instagram: "https://www.instagram.com/s.a.t.u.r.n.s/",
  whatsapp: "https://wa.me/12604250373?text=Hi,%20What's%20up",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-android"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Purdue University, USA",
      logo: require("./assets/images/purdueLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2024 - December 2025",
      desc: "Course Completed: ",
      descBullets: [
        "Full Stack Web Development",
        "Operating Systems",
        "Software Engineering"
      ]
    },
    {
      schoolName: "Amravati University, India",
      logo: require("./assets/images/sgbau.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2018 - June 2022",
      desc: "College Activities:",
      descBullets: [
        "Class Representative",
        "Training and Placement Student Coordinator",
        "Volunteered in varieties of college committees (CSESA, CSI, E-Cell, Pursuit)",
        "Organised and coordinated college level workshops and National level events"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Persistent Systems",
      companylogo: require("./assets/images/psl.png"),
      date: "Jan 2022 - Dec 2023",
      place: "Pune, India",
      desc: "At Persistent Systems, I specialized in troubleshooting Saviynt and database issues, collaborating effectively with my team and using React.js, Git, and SQL to enhance our applications.",
      descBullets: [
        "Collaborated with team members to troubleshoot and resolve Saviynt and database-related issues",
        "Supported in continuous improvement of the application",
        "Tech Stack: Java, Git, SQL, Saviynt",
      ]
    },
    {
      role: "Flutter Developer Intern",
      company: "Artbook The Platform",
      companylogo: require("./assets/images/abthepf.png"),
      date: "Sept 2021 - Feb 2022",
      place: "Karlsruhe, Germany",
      desc: "At Artbook, I designed and developed an Android application using Flutter, NoSQL, and REST APIs, actively participating in all development phases and contributing to continuous application improvement.",
      descBullets: [
        "Design and developed android application using Flutter, NoSQL and REST APIs",
        "Participated in all phases of development life–cycle",
        "Supported in continuous improvement of the application"
      ]
    },
   
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Example",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Example",
      projectDesc: "Example",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://Example.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Example",
      projectDesc: "Example",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://Example.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "First Place National Runner-up",
      subtitle:
        "This Challenge's focus was to make smart key for meter cabins installed by Adani Electricity especially to secure meters cabins of customers and meet the needs of security.",
      image: require("./assets/images/adani.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://white-judy-66.tiiny.site/"
        },
        
        {
          name: "Adani Electricity Hackathon Blog",
          url: "https://blogssgmce.in/ssgmce-students-bag-first-and-second-runner-up-position-in-hackathon-organized-by-adani-electricity/"
        }
      ]
    },
    {
      title: "Winner of Grand Project Expo",
      subtitle:
        "I presented an IoT project featuring a digital locking system. This project included a web app and a mobile app, allowing users to control and monitor the system remotely. I utilized Flutter, PHP, HTML/CSS, Bootstrap, JS, SQL, and hardware with NodeMCU ESP8266.",
      image: require("./assets/images/pursuit.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    },

    {
      title: "Runner-Up at Enigma",
      subtitle: "The event featured multiple challenging rounds, including a quiz, a relay round, and solving pseudo code, testing my knowledge and problem-solving skills in C++.",
      image: require("./assets/images/acm.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: ""
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "sample",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE 😅"
  ),

  talks: [
    {
      title: "Build Example",
      subtitle: "Example 2019",
      slides_url: "Example",
      event_url: "Example"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Example",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "Example"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(260)-425-0373",
  email_address: "vnkhode@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
