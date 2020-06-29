export type Article = {
  _id: string;
  name: string;
};

export interface ArticleReducerType {
  articles: any[];
  total: number;
  loading: boolean;
}
