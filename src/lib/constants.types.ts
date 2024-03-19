import { IconKey } from '@/components/contact/contact-icon';

export type IJourneyItemProps = {
  title: string;
  description: string;
};
export type IJourneyProps = {
  year: number;
  items: IJourneyItemProps[];
};

export type SocialLinksProps = {
  name: string;
  uri: string;
  icon: IconKey;
};
