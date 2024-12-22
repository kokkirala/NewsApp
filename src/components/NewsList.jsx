import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news, onNewsClick }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} onClick={() => onNewsClick(item.id)} />
      ))}
    </div>
  );
};

export default NewsList;
