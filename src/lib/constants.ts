import { SocialLinksProps } from './constants.types';

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
    href: `/resume`,
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
    href: `/blog`,
    description: `Explore insights on tech, my experiences, and industry trends.`
  },
  {
    title: `Stack`,
    href: `/stack`,
    description: `Discover my tech tools, languages, and frameworks I work with.`
  },
  {
    title: `Bookmarks`,
    href: `/bookmarks`,
    description: `Curated list of impactful articles, tools, and tech resources.`
  },
  {
    title: `Reading`,
    href: `/reading`,
    description: `Essential articles and blogs for tech enthusiasts and professionals.`
  }
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
