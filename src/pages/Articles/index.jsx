import { useState, useEffect, useCallback } from "react";
import SkeletonArticle from "../../components/skeletons/SkeletonArticle";
import Article from "./Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const articles = await res.json();
      setArticles(articles);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div className="columns is-centered is-vcenterd is-mobile is-multiline">
      <h2 className="title mt-3 mb-0">Articles</h2>
      <hr className="is-fullwidth" />
      {articles && articles.length
        ? articles.map(({ userId, id, title = "", body = "" }) => (
            <Article {...{ userId, title, body }} key={id.toString()} />
          ))
        : Array(10)
            .fill(1)
            .map((_, i) => <SkeletonArticle key={i.toString()} />)}
    </div>
  );
};

export default Articles;
