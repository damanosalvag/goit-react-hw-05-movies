import { getDetailMovie } from "../services/call-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const handleReviewsList = async () => {
    const reviewsList = await getDetailMovie(movieId, "reviews");
    setReviews(reviewsList.results);
  };

  useEffect(() => {
    handleReviewsList();
  }, []);
  return (
    <section>
      <h3>Reviews</h3>
      <ul>
        {reviews.length > 0 ? reviews.map((review) => (
          <li key={nanoid(5)}>
            <strong>{review.author}</strong>
            <p>{review.content}</p>
          </li>
        )): <p>No reviews yet</p>}
      </ul>
    </section>
  );
};

export default Reviews;
