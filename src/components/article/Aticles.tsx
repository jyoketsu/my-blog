import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticles } from "../../redux/actions";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7].map((aritcle, index) => (
        <ArticleCard key={index} />
      ))}
    </div>
  );
}
