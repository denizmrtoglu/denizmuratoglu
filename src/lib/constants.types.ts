export type IJourneyItemProps = {
  title: string;
  description: string;
};
export type IJourneyProps = {
  year: number;
  items: IJourneyItemProps[];
};
