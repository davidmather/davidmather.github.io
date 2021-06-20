/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, 
};

//Home Page
const greeting = {
  title: "David Mather",
  logo_name: "DavidMather",
  nickname: "Dave",
  subTitle:
    "Hi, I'm David Mather, a Full Stack Developer 🚀 from Athlone, Ireland. Currently working with Ericsson.",
  resumeLink:
    "https://drive.google.com/file/d/1klJvMMytQMS26lR9-DpIbZjprBdqpt_L/view?usp=sharing",
  portfolio_repository: "https://github.com/DavidMather/Portfolio-react",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/davidmather/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/davidgeorgemather/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:matherdavid2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }, 
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/mather8524/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },

  {
    name: "Discord",
    link: "https://discord.gg/VgEDsMfR",
    fontAwesomeIcon: "fa-discord", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#6b178a;", // Reference https://simpleicons.org/?q=instagram
  },
  
];

const skills = {
  data: [
  {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "logos-neo4j",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos-jira",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "logos-confluence",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
		{
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#1488C6",
          },
        },
		{
          skillName: "Jenkins",
          fontAwesomeClassname: "logos-jenkins",
          style: {
            color: "black",
          },
        },
		{
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E34F26",
          },
        },
		{
          skillName: "Gerrit",
          fontAwesomeClassname: "simple-icons:gerrit",
          style: {
            color: "#1488C6",
          },
        },
		{
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "purple",
          },
        },
		{
          skillName: "Ubuntu",
          fontAwesomeClassname: "simple-icons:ubuntu",
          style: {
            color: "#E34F26",
          },
        },
		{
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#1488C6",
          },
        },
		{
          skillName: "SonarQube",
          fontAwesomeClassname: "simple-icons:sonarqube",
          style: {
            backgroundColor: "spring",
            color: "#3776AB",
          },
        },		
      ],
    },
	{
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React, Vue, Bootstrap.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
		  {
          skillName: "Jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            backgroundColor: "",
            color: "#1960e0",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
		{
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#61DAFB",
          },
        },       
		{
          skillName: "Webrtc",
          fontAwesomeClassname: "logos-webrtc",
          style: {
            color: "green",
          },
        },
		{
          skillName: "Web Assembly",
          fontAwesomeClassname: "simple-icons:webassembly",
          style: {
            backgroundColor: "spring",
            color: "#8c0f8c",
          },
        },
		{
          skillName: "Blazor",
          fontAwesomeClassname: "simple-icons:blazor",
          style: {
            backgroundColor: "spring",
            color: "#a077a0",
          },
        },
		{
          skillName: "Vue",
          fontAwesomeClassname: "logos-vue",
          style: {
            backgroundColor: "spring",
            color: "darkblue",
          },
        },
		{
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            backgroundColor: "spring",
            color: "red",
          },
        },	
      ],
    },
		{
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Creating application backend in Node, PHP, etc",
      ],
      softwareSkills: [       
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
		{
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#61DAFB",
          },
        },        
		{
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            backgroundColor: "spring",
            color: "#339933",
          },
        },
		{
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "spring",
            color: "#3776AB",
          },
        },
		{
          skillName: "IIS",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            backgroundColor: "spring",
            color: "black",
          },
        },		
		{
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            backgroundColor: "spring",
            color: "#777bb3",
          },
        },	
		{
          skillName: "Pug",
          fontAwesomeClassname: "logos-pug",
          style: {
            backgroundColor: "spring",
            color: "#red",
          },
        },		
		{
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            backgroundColor: "spring",
            color: "green",
          },
        },
		{
          skillName: "Apache",
          fontAwesomeClassname: "logos-apache",
          style: {
            backgroundColor: "spring",
            color: "darkpink",
          },
        },
      ],
    },
	{
      title: "Cross-Platform App Development",
      fileName: "AppDevImg",
      skills: [
        "⚡ Developing mobile applications using React Native, Cordova, and Ionic",
		"⚡ Developing desktop applications using electron",
      ],
      softwareSkills: [      
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },        
		{
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "rgb(90 195 36)",
          },
        },
		{
          skillName: "Ionic",
          fontAwesomeClassname: "simple-icons:ionic",
          style: {
            color: "#02569B",
          },
        },
		{
          skillName: "Electron",
          fontAwesomeClassname: "logos-electron",
          style: {
            color: "#02569B",
          },
        },
		{
          skillName: "Cordova",
          fontAwesomeClassname: "logos-cordova",
          style: {
            color: "grey",
          },
        },		
		{
          skillName: "Ios",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            backgroundColor: "spring",
            color: "black",
          },
        },		
      ],
    },
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#D00000",
          },
        },
		    {
          skillName: "OpenCv",
          fontAwesomeClassname: "logos-opencv",
          style: {
            color: "#black",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "ion-icon-excel",
          style: {
            color: "#D00000",
          },
        },
      ],
    },
        {
      title: "Game Development",
      fileName: "GameDevImg",
      skills: [
        "⚡ Creating VR video games using Unreal Engine, and Oculus",
		"⚡ Creating Android video games using Unity",
		"⚡ Creating 3d assets using Blender, and Quixel Mixer",
      ],
      softwareSkills: [
		{
          skillName: "Unreal",
          fontAwesomeClassname: "simple-icons:unrealengine",
          style: {
            color: "#000000",
          },
        },
		{
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000000",
          },
        },
		{
          skillName: "Blender",
          fontAwesomeClassname: "logos-blender",
          style: {
            color: "rgb(243 103 65)",
          },
        },
		{
          skillName: "Html5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
		{
          skillName: "Oculus/Vive VR",
          fontAwesomeClassname: "simple-icons:oculus",
          style: {
            color: "black",
          },
        },					
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
		{
          skillName: "Gimp",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#000000",
          },
        },
		{
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "rgb(0, 196, 204)",
          },
        },
		{
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/",
    // },
    
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Munster Technological University",
      subtitle: "BSc in Web Development",
      logo_path: "mtulogo.png",
      alt_name: "MTU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I received First-Class Honours.",
    ],
      website_link: "https://mtu.ie",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Kubernetes Administrator",
      subtitle: "- The Linux Foundation",
      logo_path: "TheLinuxFoundation.png",
      certificate_link:
        "https://verify.skilljar.com/c/at33mrz5buw8",
      alt_name: "Certified Kubernetes Administrator Certification link",
      color_code: "#D83B0199",
    }, 
    {
      title: "CloudBees Core Fundamentals",
      subtitle: "- CloudBees",
      logo_path: "cloudbees.png",
      certificate_link:
        "https://verify.skilljar.com/c/at33mrz5buw8",
      alt_name: "Certified Kubernetes Administrator",
      color_code: "#D83B0199",
    }, 
    {
      title: "Jenkins Administration Fundamentals",
      subtitle: "- CloudBees",
      logo_path: "cloudbees.png",
      certificate_link:
        "https://verify.skilljar.com/c/jgir542sb2ez",
      alt_name: "Certified Kubernetes Administrator",
      color_code: "#D83B0199",
    }, 
	    {
      title: "Jenkins Pipeline Fundamentals",
      subtitle: "- CloudBees",
      logo_path: "cloudbees.png",
      certificate_link:
        "https://verify.skilljar.com/c/27pf9w8vz6os",
      alt_name: "Certified Kubernetes Administrator",
      color_code: "#D83B0199",
    }, 
	    {
      title: "Jenkins Pipeline Intermediate",
      subtitle: "- CloudBees",
      logo_path: "cloudbees.png",
      certificate_link:
        "https://verify.skilljar.com/c/74ohhibak4u8",
      alt_name: "Certified Kubernetes Administrator",
      color_code: "#D83B0199",
    },
    {
      title: "Jenkins Fundamentals",
      subtitle: "- CloudBees",
      logo_path: "cloudbees.png",
      certificate_link:
        "https://verify.skilljar.com/c/m5zhfovsmfsk",
      alt_name: "Certified Kubernetes Administrator",
      color_code: "#D83B0199",
    }, 	
	{
      title: "Certified Kubernetes Administrator (CKA) with Practice Tests",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2c202908-21bd-42e0-b180-1663408be1f1/",
      alt_name: "Certified Kubernetes Administrator",
      color_code: "#D83B0199",
    }, 
   {
      title: "Learning Drupal 8",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-I24EXSVU/",
      alt_name: "Drupal 8",
      color_code: "#D83B0199",
    }, 
    {
      title: "Developing Real Time Applications with WebRTC",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-Q1NNATW4/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
      alt_name: "Developing Real Time Applications with WebRTC",
      color_code: "#D83B0199",
    }, 
	{
      title: " Java Programming Masterclass for Software Developers by Tim Buchalka",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-WNCK9Y75/",
      alt_name: "Developing Real Time Applications with WebRTC",
      color_code: "#D83B0199",
    }, 
    {
      title: " Visual Paradigm Essential",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2ZUCL2V3/",
      alt_name: "Visual Paradigm Essential",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learn DevOps The Complete Kubernetes Course",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7453e565-0a89-4975-9568-d492c663ae9d/",
      alt_name: "Learn DevOps The Complete Kubernetes Course",
      color_code: "#D83B0199",
    }, 
	{
      title: " Unified Modeling Language(UML): The Complete Guide",
      subtitle: "- Udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-TBGSGXK5/",
      alt_name: "(UML): The Complete Guide",
      color_code: "#D83B0199",
    },
	{
      title: "Create and Deploy Java EE 8 Apps on Docker and Kubernetes",
      subtitle: "- Packt",
      logo_path: "Packt.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-cd20fd4e-07f8-4ca4-b7b7-4932caf22de1/",
      alt_name: "Java EE 8 Apps on Docker and Kubernetes",
      color_code: "#D83B0199",
    },
	{
      title: "European Computer Driving License (ECDL)",
      subtitle: "- ICS Skills",
      logo_path: "ICS.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-TBGSGXK5/",
      alt_name: "(ECDL)",
      color_code: "#D83B0199",
    }, 
	{
      title: "CSS: Design Systems and Architectures",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/css-design-systems-and-architectures?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "CSS: Design Systems and Architectures",
      color_code: "#D83B0199",
    }, 
	{
      title: "Code Clinic: Java",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/code-clinic-java-2?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Code Clinic: Java",
      color_code: "#D83B0199",
    }, 
	{
      title: "Git: Intermediate Techniques",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/git-intermediate-techniques?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Git: Intermediate Techniques",
      color_code: "#D83B0199",
    }, 
	{
      title: "Javascript Patterns",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/javascript-patterns?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Javascript Patterns",
      color_code: "#D83B0199",
    }, 
	{
      title: "Advanced Express",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/advanced-express?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Advanced Express",
      color_code: "#D83B0199",
    }, 
	{
      title: "Agile Foundations",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/agile-foundations?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Agile Foundations",
      color_code: "#D83B0199",
    }, 
	{
      title: "Become a Data Scientist",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-data-scientist?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Become a Data Scientist",
      color_code: "#D83B0199",
    }, 
	{
      title: "Become a PHP Developer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/php-developer?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Become a PHP Developer",
      color_code: "#D83B0199",
    }, 
	{
      title: "Become a Vanilla Javascript Developer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-vanilla-javascript-developer?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Become a Vanilla Javascript Developer",
      color_code: "#D83B0199",
    }, 
	{
      title: "Become a Web Developer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-web-developer?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Become a Web Developer",
      color_code: "#D83B0199",
    }, 
	{
      title: "Creating Web Icons with SVG",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/creating-web-icons-with-svg?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Creating Web Icons with SVG",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learning SVG",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-svg?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Learning SVG",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learning Web Audio and Video",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-web-audio-and-video?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Learning Web Audio and Video",
      color_code: "#D83B0199",
    }, 
	{
      title: "Microservices Foundations",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/microservices-foundations?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Microservices Foundations",
      color_code: "#D83B0199",
    }, 
	{
      title: "PHP: Choosing a PHP Editor",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/php-choosing-a-php-editor?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "PHP: Choosing a PHP Editor",
      color_code: "#D83B0199",
    }, 
	{
      title: "PowerShell 5 Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/powershell-5-essential-training?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "PowerShell 5 Essential Training",
      color_code: "#D83B0199",
    }, 
	{
      title: "PowerShel: Automating Administration",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/powershell-automating-administration?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "PowerShel: Automating Administration",
      color_code: "#D83B0199",
    }, 
	{
      title: "Become a C++ Developer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-c-plus-plus-developer?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Become a C++ Developer",
      color_code: "#D83B0199",
    }, 
	{
      title: "Excel: Macros and VBA for beginners",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/excel-macros-and-vba-for-beginners?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "excel-macros-and-vba-for-beginners",
      color_code: "#D83B0199",
    }, 
	{
      title: "Introducing Jupyter",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/introducing-jupyter?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Introducing Jupyter",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learning Java",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-java-3?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Learning Java",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learning React.js",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-react-js-4?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Learning React.js",
      color_code: "#D83B0199",
    }, 
	{
      title: "Node.js Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/node-js-essential-training-3?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Node.js Essential Training",
      color_code: "#D83B0199",
    }, 
	{
      title: "Raspberry Pi Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/raspberry-pi-essential-training?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Raspberry Pi Essential Training",
      color_code: "#D83B0199",
    }, 
	{
      title: "Visual Basic Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/visual-basic-essential-training?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Visual Basic Essential Training",
      color_code: "#D83B0199",
    }, 
	{
      title: "Visual Studio Code for Python Developers",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/visual-studio-code-for-python-developers?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Visual Studio Code for Python Developers",
      color_code: "#D83B0199",
    }, 
	{
      title: "ASP.NET MVC 5 Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/asp-dot-net-mvc-5-essential-training-3?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "ASP.NET MVC 5 Essential Training",
      color_code: "#D83B0199",
    }, 
	{
      title: "Building RESTful Web APIs with Django",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/building-restful-web-apis-with-django?trk=flagship-lil_details_certification&trk=lil_details_certification",
      alt_name: "Building RESTful Web APIs with Django",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learning VBA in Excel",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-vba-in-excel-2",
      alt_name: "Learning VBA in Excel",
      color_code: "#D83B0199",
    }, 
	{
      title: "Learning Vue.js",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-vue-js-3",
      alt_name: "Learning Vue.js",
      color_code: "#D83B0199",
    }, 
	{
      title: "Nail Your Python Interview",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/nail-your-python-interview",
      alt_name: "Nail Your Python Interview",
      color_code: "#D83B0199",
    }, 
	{
      title: "OpenCV for Python Developers",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/opencv-for-python-developers",
      alt_name: "OpenCV for Python Developers",
      color_code: "#D83B0199",
    }, 
	{
      title: "Python Data Structures:  Stacks, Queues, and Deques",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-data-structures-stacks-queues-and-deques",
      alt_name: "Python Data Structures:  Stacks, Queues, and Deques",
      color_code: "#D83B0199",
    }, 
	{
      title: "Python Theory for Network Engineers",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-theory-for-network-engineers",
      alt_name: "Python Theory for Network Engineers",
      color_code: "#D83B0199",
    }, 
	{
      title: "Unreal Essential Training (2016)",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/unreal-essential-training-2016",
      alt_name: "Unreal Essential Training (2016)",
      color_code: "#D83B0199",
    }, 
	{
      title: "Windows Server 2012: Group Policy",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/windows-server-2012-group-policy",
      alt_name: "Windows Server 2012: Group Policy",
      color_code: "#D83B0199",
    }, 
	{
      title: "Advance Your Data Science Skills in Health Sciences",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/advance-your-data-science-skills-in-health-sciences",
      alt_name: "Advance Your Data Science Skills in Health Sciences",
      color_code: "#D83B0199",
    }, 
	{
      title: "Advance Your Skills as a Python Data Expert",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/advance-your-skills-as-a-python-data-expert",
      alt_name: "Advance Your Skills as a Python Data Expert",
      color_code: "#D83B0199",
    }, 
	{
      title: "Optimizing Python Code",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/optimizing-python-code",
      alt_name: "Optimizing Python Code",
      color_code: "#D83B0199",
    }, {
      title: "Optimizing Python Services",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/optimizing-python-services",
      alt_name: "Optimizing Python Services",
      color_code: "#D83B0199",
    }, {
      title: "Programming Foundations: Fundamentals",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/programming-foundations-fundamentals",
      alt_name: "Programming Foundations: Fundamentals",
      color_code: "#D83B0199",
    }, {
      title: "Python Automation and Testing",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-automation-and-testing",
      alt_name: "Python Automation and Testing",
      color_code: "#D83B0199",
    }, {
      title: "Python Parallel Programming Solutions",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-parallel-programming-solutions",
      alt_name: "Python Parallel Programming Solutions",
      color_code: "#D83B0199",
    }, {
      title: "Python Projects",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-projects",
      alt_name: "Python Projects",
      color_code: "#D83B0199",
    },  {
      title: "Python Standard Library Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-standard-library-essential-training",
      alt_name: "Python Standard Library Essential Training",
      color_code: "#D83B0199",
    }, {
      title: "Python: Programming Efficiently",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-programming-efficiently",
      alt_name: "Python: Programming Efficiently",
      color_code: "#D83B0199",
    }, {
      title: "Python: XML, JSON, and the Web",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/python-xml-json-and-the-web",
      alt_name: "Python: XML, JSON, and the Web",
      color_code: "#D83B0199",
    }, {
      title: "Querying Microsoft SQL Server 2012",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/querying-microsoft-sql-server-2012",
      alt_name: "Querying Microsoft SQL Server 2012",
      color_code: "#D83B0199",
    }, {
      title: "Become a Python Developer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-python-developer",
      alt_name: "Become a Python Developer",
      color_code: "#D83B0199",
    }, {
      title: "Become a Test Automation Engineer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-test-automation-engineer",
      alt_name: "Become a Test Automation Engineer",
      color_code: "#D83B0199",
    }, {
      title: "Learning Python GUI Programming",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-python-gui-programming",
      alt_name: "Learning Python GUI Programming",
      color_code: "#D83B0199",
    }, {
      title: "Learning Python with PyCharm",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-python-with-pycharm",
      alt_name: "Learning Python with PyCharm",
      color_code: "#D83B0199",
    }, {
      title: "Master Python for Data Science",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/master-python-for-data-science",
      alt_name: "Master Python for Data Science",
      color_code: "#D83B0199",
    }, {
      title: "Unit Testing and Test Driven Development in Python",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/unit-testing-and-test-driven-development-in-python",
      alt_name: "Unit Testing and Test Driven Development in Python",
      color_code: "#D83B0199",
    }, {
      title: "Become a C# Developer",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/paths/become-a-c-developer",
      alt_name: "Become a C# Developer",
      color_code: "#D83B0199",
    }, {
      title: "Gradle for Java Developers",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/gradle-for-java-developers",
      alt_name: "Gradle for Java Developers",
      color_code: "#D83B0199",
    }, {
      title: "Learning Confluence",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-confluence",
      alt_name: "Learning Confluence",
      color_code: "#D83B0199",
    },{
      title: "Learning JIRA Software (2017)",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/learning-jira-software-2017",
      alt_name: "Learning JIRA Software (2017)",
      color_code: "#D83B0199",
    },{
      title: "Power BI Essential Training",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/power-bi-essential-training",
      alt_name: "Power BI Essential Training",
      color_code: "#D83B0199",
    },{
      title: "Programming Foundations: Algorithms",
      subtitle: "- Linkedin",
      logo_path: "linkedin.jpg",
      certificate_link:
        "http://www.linkedin.com/learning/programming-foundations-algorithms",
      alt_name: "Programming Foundations: Algorithms",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have completed various Internships in the field of Full Stack Development that gave me industry exposure on both Front End and Back End development. Apart from Developing Web and Mobile applications, I love teaching and writing about Tech. Hence I actively contribute to Open Source Communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Developer",
          company: "Ericsson",
          company_url: "https://www.ericsson.com/",
          logo_path: "Ericsson_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Athlone, Ireland",
          description:
            `In my current role with Ericsson in Enterprise Cloud Native Application Development. It is my responsibility to develop
			 and deploy Microservices, Helm Charts, and Jenkins Jobs. An agile methodology (scrum) is maintained using Jira, 
			 Confluence and Gerrit. One of the main challenges was getting SLES and RHEL containers to run as non-root.`,
          color: "#0879bf",
        },
		{
          title: "Freelance Fullstack Developer",
          company: "Guru",
          company_url: "https://www.guru.com/",
          logo_path: "Guru.png",
          duration: "Jul 2015 - Jan 2019",
          location: "Online, Online",
          description:
            `Various Freelance Projects Including:

			Electronjs application for marketeers and SEO.
			-nightmarejs, selenium and autoit, sqlite

			Fullstack website development + infrastructure.
			-bootstrap,php,dns,cpanel

			Webhosting infrastructure setup.
			-plesk,iis,tcp/ip,dns,windows server administration

			Dab multiplex work on ARM based systems.
			-linux,C,scripting`,
          color: "#0879bf",
        },
		

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Undergraduate Intern Technical",
          company: "Ericsson",
          company_url: "https://www.mcafee.com/",
          logo_path: "Mcafee.png",
          duration: "Jan 2019 - Sep 2019",
          location: "Cork, Ireland",
          description:
            `In my previous job with McAfee my team managed our own server room consisting of Windows Server 2012 
			machines, ESXI, Windows Storage Server, Cisco routers, and switches. Some of the servers ran Windows Assessment 
			Services (WAS) which would deploy test automation to physical hardware such as laptops, tablets, and desktops that 
			needed to be connected properly in the server room. Some of my responsibilities included configuration of the server 
			room, cable management, ensuring that servers were properly labeled and in the correct location, building custom 
			windows images, patching, bios updates etc. for use with Rufus or WAS and development of Python, Java, VBScript 
			automation tools for config management of servers (active directory, regedit. etc.).`,
          color: "#0879bf",
        },
		{
          title: "Student Intern",
          company: "Sligo General Hospital",
          company_url: "https://hse.ie/",
          logo_path: "HSE.jpg",
          duration: "Sep 2014 - Jul 2015",
          location: "Sligo, Ireland",
          description:
            `Confidential`,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "TY work experience",
          company: "St Lukes Hospital",
          company_url: "https://hse.ie/",
          logo_path: "HSE.jpg",
          duration: "April 2010 - April 2010",
          location: "Kilkenny, Ireland",
          description:
            "Filing",
          color: "#4285F4",
        },        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Design and Development projects and deploy them to web applications using Heroku.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1607113767616.png",
    description:
      "You can message me, I will try to reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@matherdavid2",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "2 Woodville Grove, Woodville Grange, Athlone, Co. Westmeath",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/2+Woodville+Grove,+Woodville+Grange,+Athlone,+Co.+Westmeath,+N37+N2R3/@53.4343509,-7.899872,17z/data=!3m1!4b1!4m5!3m4!1s0x485c4981897b98fb:0xb849d9471cdb885a!8m2!3d53.4343509!4d-7.8976833",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+353 894556896",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
