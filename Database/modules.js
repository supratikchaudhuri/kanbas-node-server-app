const modules = [
  {
    _id: "RS101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    contents: [
      {
        heading: "Learning Objectives",
        topics: [
          {
            name: "How a Rocket Operates",
          },
          {
            name: "Different type of fuel used in rockets",
          },
          {
            name: "Fundamentals of Rocket Propulsion by D. P. Mishra",
            link: "https://ftp.idu.ac.id/wp-content/uploads/ebook/tdg/DESIGN%20SISTEM%20DAYA%20GERAK/Fundamentals%20of%20Rocket%20Propulsion.pdf",
          },
        ],
      },
    ],
    course: "RS101",
  },
  {
    _id: "M102",
    name: "Fuel and Combustion",
    description:
      "Understanding rocket fuel, combustion processes, and efficiency.",
    course: "RS101",
    contents: [
      {
        heading: "Learning Objectives",
        topics: [
          {
            name: "Composition of Rocket Fuel",
          },
          {
            name: "Chemical Structure of Hydrazine",
          },
          {
            name: "Analysis of Rocket Fuels",
            link: "https://papers.ssrn.com/sol3/Delivery.cfm/SSRN_ID3763002_code4337744.pdf?abstractid=3763002",
          },
        ],
      },
      {
        heading: "Slides",
        topics: [
          {
            name: "Rocket Propellent",
            link: "https://www.slideshare.net/dhirendrasingh38/rocket-propellent-ppt",
          },
        ],
      },
    ],
  },
  {
    _id: "M103",
    name: "Nozzle Design",
    description:
      "Principles of rocket nozzle design and performance optimization.",
    course: "RS101",
  },
  {
    _id: "M201",
    name: "Fundamentals of Aerodynamics",
    description: "Basic aerodynamic concepts and fluid dynamics principles.",
    course: "RS102",
  },
  {
    _id: "M202",
    name: "Subsonic and Supersonic Flow",
    description: "Understanding subsonic and supersonic aerodynamic behaviors.",
    course: "RS102",
  },
  {
    _id: "M203",
    name: "Aerodynamic Heating",
    description: "Study of aerodynamic heating and thermal protection systems.",
    course: "RS102",
  },
  {
    _id: "M301",
    name: "Spacecraft Structural Design",
    description:
      "Fundamentals of designing spacecraft structures and materials selection.",
    course: "RS103",
  },
  {
    _id: "M302",
    name: "Orbital Mechanics",
    description: "Understanding orbital dynamics and mission planning.",
    course: "RS103",
  },
  {
    _id: "M303",
    name: "Spacecraft Systems Engineering",
    description: "Overview of spacecraft systems and subsystems engineering.",
    course: "RS103",
  },
  {
    _id: "M0",
    name: "Welcome to the course",
    contents: [
      {
        heading: "References",
        topics: [
          {
            name: "YouTube (Lecture Recordings)",
            link: "https://www.youtube.com/@WebDevTV",
          },
          {
            name: "Twitter/X (Lecture Recordings)",
            link: "https://twitter.com/jannunzi",
          },
        ],
      },
    ],
    course: "WD101",
  },
  {
    _id: "M1",
    name: "Introduction to HTML",
    description: "Undestanding the purpose and use of HTML/HTMX",
    course: "WD101",
  },
  {
    _id: "M2",
    name: "Styling with CSS/SCSS + Bootstrap",
    description:
      "Developing user-friendly UI components and responsive website for variety to client devices",
    course: "WD101",
  },
  {
    _id: "M3",
    name: "Javascript + REACT",
    description: "Adding dynamic capabilities to the website",
    course: "WD101",
  },
];

export default modules;
