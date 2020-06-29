export const actionTypes = {
  GET_ARTICLES: "GET_ARTICLES",
  GET_ARTICLES_SUCCEEDED: "GET_ARTICLES_SUCCEEDED",
  GET_ARTICLES_FAILED: "GET_ARTICLES_FAILED",

  GET_ARTICLE_BY_ID: "GET_ARTICLE_BY_ID",
  CLEAR_ARTICLE: "CLEAR_ARTICLE",
};

export function getArticles(
  current: number,
  pageSize: number,
  keyword?: string
) {
  return {
    type: actionTypes.GET_ARTICLES,
    current,
    pageSize,
    keyword,
  };
}
export function getArticlesSuccess(data: any) {
  return {
    type: actionTypes.GET_ARTICLES_SUCCEEDED,
    data,
  };
}
export function getArticlesFailed(error: any) {
  return {
    type: actionTypes.GET_ARTICLES_FAILED,
    error,
  };
}
