export type IJourneyItemProps = {
  title: string;
  description: string;
};

export type IJourney = {
  year: number;
  items: IJourneyItemProps[];
};

export type JourneyDTO = IJourney[];
