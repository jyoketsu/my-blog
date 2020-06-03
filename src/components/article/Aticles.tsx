import ArticleCard from "./ArticleCard";

export default function Articles({ articles }) {
  return (
    <div>
      {articles.map((aritcle, index) => (
        <ArticleCard key={index} aritcle={aritcle} />
      ))}
    </div>
  );
}
