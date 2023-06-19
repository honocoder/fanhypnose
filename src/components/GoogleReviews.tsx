import React, { useState, useEffect } from 'react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const apiKey = 'AIzaSyAJZuNCFCA-HL-xaPgBqGvXLUt4lH9XMS8';
  const placeId = 'ChIJxTv-zcYB50cRX1Tt7Nij2kg';

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log('here ->', data);

        const reviewsData: Review[] = data.result.reviews;
        setReviews(reviewsData);
      } else {
        console.error('Error fetching Google Reviews:', response.status);
      }
    } catch (error) {
      console.error('Error fetching Google Reviews:', error);
    }
  };

  return (
    <>
      <h1>Google Reviews</h1>
      {reviews.map((review) => (
        <div key={review.time}>
          <p>{review.author_name}</p>
          <p>{review.rating} stars</p>
          <p>{review.text}</p>
        </div>
      ))}
    </>
  );
};

export default GoogleReviews;
