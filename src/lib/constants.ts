import { IJourneyProps, SocialLinksProps } from './constants.types';

export const ABOUT_ME_LINKS: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: `Introduction`,
    href: `/introduction`,
    description: `Overview of my background and interests.`
  },
  {
    title: `My Journey`,
    href: `/journey`,
    description: `The road I've traveled in tech, from start to here.`
  },
  {
    title: `Resume`,
    href: `/resume`,
    description: `Overview of my skills, experience, and contributions.`
  }
];

export const INSIGHTS_LINKS: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: `Bookmarks`,
    href: `/bookmarks`,
    description: `Curated list of impactful articles, tools, and tech resources.`
  },
  {
    title: `Reading List`,
    href: `/reading`,
    description: `Essential articles and blogs for tech enthusiasts and professionals.`
  }
];

export const JOURNEY: IJourneyProps[] = [
  {
    year: 1992,
    items: [
      {
        title: 'Born',
        description: 'In Antakya, Turkey'
      }
    ]
  },
  {
    year: 2010,
    items: [
      {
        title: 'Graduation of high school',
        description: 'Selim Nevzat Sahin Anatolian High School'
      }
    ]
  },
  {
    year: 2011,
    items: [
      {
        title: `Moved`,
        description: 'To Ankara'
      },
      {
        title: 'Founded Sosyal Hacettepe',
        description: 'Founder'
      }
    ]
  },
  {
    year: 2017,
    items: [
      {
        title: 'Joined Bilisim AS',
        description: 'Software Engineer'
      }
    ]
  },
  {
    year: 2019,
    items: [
      {
        title: `Bachelor's degree`,
        description: 'Hacettepe University | CS'
      },
      {
        title: `Served in the military`,
        description: 'At Istanbul'
      },
      {
        title: `Joined OBSS (Yapıkredi Bank)`,
        description: 'Software Engineer'
      },
      {
        title: `Moved`,
        description: 'To Istanbul'
      }
    ]
  },
  {
    year: 2020,
    items: [
      {
        title: `Moved`,
        description: 'To Ankara'
      },
      {
        title: `Account Changed OBSS (Aselsan)`,
        description: 'Software Engineer'
      },
      {
        title: `Married`,
        description: 'To Aybüke'
      },
      {
        title: `Joined Puente`,
        description: 'Sn. Software Engineer'
      }
    ]
  },
  {
    year: 2021,
    items: [
      {
        title: `Camping`,
        description: 'At Bozcaada'
      },
      {
        title: `Joined Kafein (Vodafone)`,
        description: 'Sn. Software Engineer'
      }
    ]
  },
  {
    year: 2022,
    items: [
      {
        title: `Joined Tmob (Hepsiburada)`,
        description: 'Sn. Software Engineer'
      },
      {
        title: `Visited`,
        description: 'Vienna & Venice & Rome'
      }
    ]
  },
  {
    year: 2023,
    items: [
      {
        title: `Joined Crea Inc`,
        description: 'Sn. Software Engineer'
      },
      {
        title: `Visited`,
        description: 'London'
      }
    ]
  },
  {
    year: 2024,
    items: [
      {
        title: `Visited`,
        description: 'Manchester & Liverpool'
      },
      {
        title: `Joined Hirehoot`,
        description: 'Sn. Software Engineer (Founding Team)'
      }
    ]
  }
];

export const WorkExperiences = [
  {
    title: 'Crea Inc',
    period: '2022-Current',
    position: 'Web & Mobile Developer - Frontend Team Lead',
    projects: [
      {
        title: 'EdVisorly & EddyDB',
        description:
          'EdVisorly is the first and only platform to empower community college students to explore, connect, and apply to public & private universities through one simple and transparent mobile app.'
      }
    ]
  },
  {
    title: 'Tmob (Hepsiburada)',
    period: '2022-2022',
    position: 'Web & Mobile Developer',
    projects: [
      {
        title: 'Hepsipay Wallet',
        description:
          'Hepsipay Wallet is your digital wallet that allows you to make fast, secure, and easy payments on Hepsiburada.'
      }
    ]
  },
  {
    title: 'Kafein (Vodafone)',
    period: '2021-2022',
    position: 'Web Developer',
    projects: [
      {
        title: 'Vodafone Supermarket',
        description:
          'Vodafone Supermarket is an online market project that can be accessed from within the Vodafone Turkey mobile application.'
      },
      {
        title: 'Vodafone Her Şey Yanımda',
        description:
          'Vodafone Her Şey Yanımda is an online e-commerce project that can be accessed from within the Vodafone Turkey mobile application and also from the browser.'
      }
    ]
  },
  {
    title: 'Puente Technology And Design',
    period: '2020-2021',
    position: 'Web & Mobile Developer',
    projects: [
      {
        title: 'KitapDinler',
        description:
          'KitapDinler is an audiobook mobile application. You can download and listen to the content you want for free and take notes.'
      },
      {
        title: 'Real Estate',
        description:
          'Real Estate is a web application that helps the property investor to calculate the values of their properties.'
      }
    ]
  },
  {
    title: 'OBSS (Aselsan)',
    period: '2019-2020',
    position: 'Web Developer',
    projects: [
      {
        title: 'TUKKS',
        description:
          'NATO compatible Brigade and Above Joint Command and Control System.'
      },
      {
        title: 'Authentication and Authorization',
        description:
          'Web interface development of the Authentication and Authorization project.'
      }
    ]
  },
  {
    title: 'Bilişim AŞ',
    period: '2017-2019',
    position: 'Web & Mobile Developer',
    projects: [
      {
        title: 'BilişimBI',
        description:
          'BilişimBI is a business intelligence product that is a product for collecting, analyzing, and interpreting data from internal and external sources to provide information and analysis on the past, present, and future status of the subject under study.'
      },
      {
        title: 'The Banks Association Of Turkey',
        description:
          'The Banks Association Of Turkey Data Query System is a web application where you can access statistical data and reports of The Banks Association Of Turkey.'
      },
      {
        title: 'Central Bank Of The Republic Of Turkey',
        description:
          'The Electronic Data Delivery System (EVDS) presents statistical time series data produced by the CBRT and/or data produced by other institutions and compiled by the CBRT.'
      }
    ]
  },
  {
    title: 'Bilişim AŞ',
    period: '2017',
    position: 'Intern',
    projects: [
      {
        title: 'BilişimBI Module Development',
        description:
          'I developed a module so that the codes written in R, a programming language used for statistical calculation and data visualization, will run in the BilişimBI product.'
      }
    ]
  },
  {
    title: 'Uz Consulting International',
    period: '2015',
    position: 'Intern',
    projects: [
      {
        title: 'Web Development Projects',
        description:
          'Worked on projects where I gained basic experience in HTML and CSS.'
      }
    ]
  }
];

export const AdditionalExperiences = [
  {
    title: 'Hirehoot',
    period: 'Freelance (Founding Team)',
    position: 'Senior Frontend Engineer',
    description:
      'Hirehoot is a leadership talent matching platform with privacy-first that connects fast-growing technology companies with top-level senior professionals.'
  },
  {
    title: 'InStorey',
    period: 'Freelance',
    position: 'Mobile Developer',
    description:
      'InStorey is the mobile app that helps you discover boutiques, independents and concept stores that turn fun shopping experiences into memorable stories.'
  },
  {
    title: 'Visit Ürgüp',
    period: 'Freelance',
    position: 'Mobile Developer',
    description:
      'Visit Ürgüp is a city guide mobile application with all up-to-date information about Ürgüp Municipality.'
  },
  {
    title: 'Evka',
    period: 'Freelance',
    position: 'Web Developer',
    description:
      'A web application for a local furniture production facility to manage order, production and invoice processes.'
  },
  {
    title: 'Tusworld',
    period: 'Freelance',
    position: 'Mobile Developer',
    description:
      'Tusworld is an online learning platform. It features video and live courses of the educational institution.'
  },
  {
    title: 'Yürü Kazan',
    period: 'Freelance',
    position: 'Mobile Developer',
    description:
      'Yürü Kazan is a pedometer application. It is also a mobile application that ranks people living in the same area by step count.'
  }
];

export const Summary = `I am a Computer Engineering graduate from Hacettepe University with a 
strong academic background. I embarked on my career journey part-time in 2017 and transitioned 
to full-time employment in 2018. Over the past four years, I have cultivated my expertise 
as a Front-End Developer, specializing in React and React Native. My commitment to these 
technologies drives my ongoing pursuit of excellence and continuous improvement in my field. 
I am committed to rapidly improving my English language skills.
`;

export const Skills = [
  'Javascript',
  'React',
  'React Native',
  'Typescript',
  'JQuery',
  'HTML',
  'CSS',
  'Scss',
  'Next.js',
  'Redux',
  'Redux Toolkit',
  'Recoil',
  'Zustand',
  'ContextAPI',
  'GetStream',
  'Auth0',
  'Jira',
  'Git',
  'Adobe Photoshop',
  'Figma',
  'Material UI',
  'Semantic UI',
  'Ant Design'
];

export const Stacks = [
  {
    name: 'VSCode',
    uri: 'https://code.visualstudio.com/',
    description: 'A free, open-source code editor developed by Microsoft.'
  },
  {
    name: 'Postman',
    uri: 'https://www.postman.com/',
    description:
      'A tool for testing APIs, facilitating the development and testing of web services.'
  },
  {
    name: 'Vercel',
    uri: 'https://vercel.com/',
    description:
      'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.'
  },
  {
    name: '1Password',
    uri: 'https://1password.com/',
    description:
      'A secure password management tool for storing and managing sensitive login details.'
  },
  {
    name: 'Notion',
    uri: 'https://www.notion.so/',
    description:
      'An all-in-one workspace for note-taking, project management, and task organization.'
  },
  {
    name: 'Flipper',
    uri: 'https://fbflipper.com/',
    description:
      'A debugging platform for mobile apps, supporting iOS, Android, and React Native.'
  },
  {
    name: 'Reactotron',
    uri: 'https://github.com/infinitered/reactotron',
    description:
      'A desktop application for inspecting React JS and React Native projects.'
  },
  {
    name: 'Homebrew',
    uri: 'https://brew.sh/',
    description:
      'The package manager for macOS, simplifying the installation and update of software.'
  }
];

export const SocialLinks: SocialLinksProps[] = [
  { name: 'Github', uri: 'https://github.com/denizmrtoglu', icon: 'github' },
  {
    name: 'E-mail',
    uri: 'mailto:denizmrtoglu@gmail.com',
    icon: 'email'
  },
  {
    name: 'LinkedIn',
    uri: 'https://www.linkedin.com/in/deniz-murato%C4%9Flu-b252b1b5/',
    icon: 'linkedin'
  },
  {
    name: 'Instagram',
    uri: 'https://www.instagram.com/denizmrtoglu/',
    icon: 'instagram'
  }
];
