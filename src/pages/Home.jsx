import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewsList from "../components/NewsList";
import './Home.css';
const Home = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated news API data
    const newsData = [
      {
        id: 1,
        title: "Breaking News 1",
        description: "This is a brief description of news 1.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxmUp1TeJQGcCEQUtPxdvP9Tip8j6alc_wA&s",
      },
      {
        id: 2,
        title: "Breaking News 2",
        description: "This is a brief description of news 2.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUz7wMFODMUXLEpiwVxC0mcjAWQnKH7qMeQ&s",
      },
    ];
    setNews(newsData);
  }, []);

  const handleNewsClick = (id) => {
    navigate(`/news/${id}`);
  };

  return <NewsList news={news} onNewsClick={handleNewsClick} />;
};

export default Home;
