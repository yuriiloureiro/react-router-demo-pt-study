import "./Reviews.css";
import { Link } from "react-router-dom";

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h2>Avaliações</h2>
      <ul className="reviews__list">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id} className="reviews__item">
              <Link to={`${review.id}`}>{review.title}</Link>
            </li>
          ))
        ) : (
          <li className="reviews__item">Carregando avaliações...</li>
        )}
      </ul>
    </div>
  );
}

export default Reviews;
