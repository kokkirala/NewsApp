import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams for routing
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    // Fetch the detailed news item from the API (use the id parameter)
    // Here we're using static data for simplicity
    const newsData = [
      {
        _id: 1,
        title: "Breaking News 1",
        description: "This is a brief description of news 1.",
        content: "Full article content for News 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imageUrl: "https://media.telanganatoday.com/wp-content/uploads/2023/12/Hyd-news-today.jpg",
      },
      {
        _id: 2,
        title: "Breaking News 2",
        description: "This is a brief description of news 2.",
        content: "Full article content for News 2. Quisque viverra orci a ex tincidunt.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQty6P2Dg_tL2mORm09woCJ5jZ-bI0HIFwX4w&s",
      },
    ];

    // Simulate fetching news by ID
    const selectedNews = newsData.find((item) => item._id === parseInt(id));
    setNewsItem(selectedNews);
  }, [id]);

  return (
    <div className="news-detail">
      {newsItem ? (
        <>
          <h2>{newsItem.title}</h2>
          <img src={newsItem.imageUrl} alt={newsItem.title} />
          <p>{newsItem.content}</p>
          <Link to="/">
            <button className="back-button">Back to News List</button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsDetail;
