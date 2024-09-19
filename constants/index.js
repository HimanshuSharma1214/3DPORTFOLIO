import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    Mycart,
    ShopWorld1,
    GamerzHub,
    Evalueserve,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    starbucks,
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
      title: "Software engineer",
      icon: web,
    },
    {
      title: "MERN Developer",
      icon: mobile,
    },
    {
      title: "Collaborative",
      icon: backend,
    },
    {
      title: "Visionary and Innovative",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  const profiles=[
          {
            name:"githunnb",
            icon: github,
          },
          {
            name:"leetcode",
            icon: github,
          }
          ,
          {
            name:"codingninja",
            icon: github,
          },
          {
            name:"linkedin",
            icon: github,
          }
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Evalueserve",
      icon: Evalueserve,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Implemented comprehensive authentication and authorization features using .NET,Angular ensuring secure user access and data protection ",
        "Managed user data and admin rights, including sorting and managing data, to maintain system efficiency and 100% user satisfaction. ",
        //"Developed a product search, rating and review system, along with an admin area for managing customers, products and order ",
        "Tech Stack: Angular,.Net Core, Web Api’s, SQL-Server ",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Evalueserve",
      icon: Evalueserve,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Aug 2024",
      points: [
        "Leveraged extensive hands-on experience in .NET, Azure, Angular,and JavaScript to develop and deploy a full-stack application on Microsoft Azure",
        "Designing and developing APIs,using Django and .NET technologies, encompassing all 4 CRUD operations,also done Testing and Code Reviews",
        "Contributed significantly to the development of a client-requested feature, enhancing the software’s functionality and user experience,to a 20% increase in user engagement",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "Bike World",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - April 2022",
      points: [
        "Developed and maintained web application for a client ",
        "Collaborating with designers and other developers to create high-quality products.",
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
      name: "MyCart",
      description:
        "An Eccomerce Website where the designed web application combines the power of React for dynamic user interfaces with the flexibility of MongoDB for scalable data management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: Mycart,
      source_code_link: "https://github.com/HimanshuSharma1214/MyCart",
    },
    {
      name: "ShopWorld",
      description:
        "Gifting Website built using Angular for the frontend, emphasizing the modern and responsive nature of the application. • It leverages .NET Core for the backend, indicating a solid, scalable architecture",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: ".NET CORE ",
          color: "green-text-gradient",
        },
        {
          name: "SQL-SERVER",
          color: "pink-text-gradient",
        },
      ],
      image: ShopWorld1,
      source_code_link: "https://github.com/HimanshuSharma1214/ShopWorld/tree/main",
    },
    {
      name: "GamerzHub",
      description:
        "In this project, the hub includes five games with a wide range of frontend work and no backend support.Each game uses core JavaScript concepts including JS libraries like jQuery and Ajax",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Jquery",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: GamerzHub,
      source_code_link: "https://github.com/HimanshuSharma1214/GamerzHub",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,profiles };