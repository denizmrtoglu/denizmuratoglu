import { IJourneyProps } from './constants.types';

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
    title: `Journey`,
    href: `/journey`,
    description: `The road I've traveled in tech, from start to here.from start to here.from start to here.`
  },
  {
    title: `Resume`,
    href: `/`,
    description: `Snapshot of my skills, experiences, and where I've made an impact.`
  }
];

export const INSIGHTS_LINKS: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: `Blog`,
    href: `/`,
    description: `Explore insights on tech, my experiences, and industry trends.`
  },
  {
    title: `Stack`,
    href: `/`,
    description: `Discover my tech tools, languages, and frameworks I work with.`
  },
  {
    title: `Bookmark`,
    href: `/`,
    description: `Curated list of impactful articles, tools, and tech resources.`
  },
  {
    title: `Reading`,
    href: `/`,
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
        title: 'Founded',
        description: 'Sosyal Hacettepe'
      }
    ]
  },
  {
    year: 2017,
    items: [
      {
        title: 'Joined Bilisim AS',
        description: 'Software Developer'
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
        description: 'Software Developer'
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
        description: 'Software Developer'
      },
      {
        title: `Married`,
        description: 'To Aybüke'
      },
      {
        title: `Joined Puente`,
        description: 'Sn. Software Developer'
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
        description: 'Sn. Software Developer'
      }
    ]
  },
  {
    year: 2022,
    items: [
      {
        title: `Joined Tmob (Hepsiburada)`,
        description: 'Sn. Software Developer'
      },
      {
        title: `Visited`,
        description: 'Vienna & Rome'
      }
    ]
  },
  {
    year: 2023,
    items: [
      {
        title: `Joined Crea Inc`,
        description: 'Sn. Software Developer'
      },
      {
        title: `Visited`,
        description: 'London'
      }
    ]
  }
];
