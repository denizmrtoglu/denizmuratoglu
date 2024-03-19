import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons';
import React from 'react';

const icons = {
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  instagram: InstagramLogoIcon,
  email: EnvelopeClosedIcon
};

export type IconKey = keyof typeof icons;

interface ContactIconProps {
  keyProp: IconKey;
}

const ContactIcon: React.FC<ContactIconProps> = ({ keyProp }) => {
  const IconComponent = icons[keyProp];

  return IconComponent ? <IconComponent width={40} height={40} /> : null;
};

export default ContactIcon;
