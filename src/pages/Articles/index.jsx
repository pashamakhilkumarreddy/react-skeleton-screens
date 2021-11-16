import { useState, useEffect, useCallback } from "react";
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
      <h2 className="title mb-0">Articles</h2>
      <hr className="is-fullwidth" />
      {articles.map(({ userId, id, title, body }) => (
        <Article {...{ userId, title, body }} key={id.toString()} />
      ))}
    </div>
  );
};

export default Articles;
