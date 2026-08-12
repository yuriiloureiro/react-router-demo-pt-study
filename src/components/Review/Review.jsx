import "./Review.css";
import { useParams, useNavigate } from "react-router-dom";

function Review({ reviews }) {
  const navigate = useNavigate(); // <--- hook useNavigate
  const params = useParams();
  const { reviewId } = params;

  // Encontramos a avaliação correta pelo ID
  const review = reviews.find((item) => item.id === Number(reviewId));

  return (
    <div className="review">
      {review ? (
        <div className="review__item">
          <h3>{review.title}</h3>
          <p>{review.text}</p>
          <p className="review__rating">Avaliação final: {review.rating}/5</p>

          {/* Botão que navega para /reviews (sempre leva ao índice de avaliações) */}
          <button
            type="button"
            onClick={() => navigate("/reviews")}
            className="review__back-button"
          >
            Volte para a lista de avaliações
          </button>
        </div>
      ) : (
        <div>
          <p>Avaliação não encontrada.</p>
          <button type="button" onClick={() => navigate("/reviews")}>
            Volte para a lista de avaliações
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
