import ArticleCard from "./ArticleCard";

export default function Articles({ articles }) {
  return (
    <div style={{ width: "100%" }}>
      {articles.map((aritcle, index) => (
        <ArticleCard key={index} aritcle={aritcle} />
      ))}
    </div>
  );
}
