export interface BookmarkType {
  collection: {
    $ref: string;
    $id: number;
    oid: number;
  };
  collectionId: number;
  cover: string;
  created: string;
  creatorRef: {
    avatar: string;
    email: string;
    name: string;
    _id: number;
  };
  domain: string;
  excerpt: string;
  highlights: unknown[];
  lastUpdate: string;
  link: string;
  media: { link: string; type: string }[];
  note: string;
  removed: boolean;
  sort: number;
  tags: string[];
  title: string;
  type: string;
  user: {
    $id: number;
    $ref: string;
  };
  _id: number;
}

export interface BookmarkResponseDTO {
  collectionId: number;
  count: number;
  items: BookmarkType[];
  result: boolean;
}
