export type Article_Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Source_Response = {
  status: string;
  sources: Source[];
};

export type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Source = {
  id: string;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
};
