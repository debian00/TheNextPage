import { useState } from 'react';
import style from './reseñasview.module.css';
import { useDispatch } from 'react-redux';
import { createReviews } from '../../../redux/actions/actionPost';

const ReseñasView = () => {
  const [review, setReview] = useState({
    score: 0, // Valor inicial de la calificación
    comment: '',
    userId: '78bc0cce-1af4-44bc-a241-b9faf018c686',
    bookId: '0f382f38-f02b-4a7b-aa3c-aed39e842884',
  });
  console.log('Reviews', review);
  const dispatch = useDispatch()

  const handleCommentChange = (e) => {
    setReview({ ...review, comment: e.target.value });
  };

  const handleRatingChange = (e) => {
    const newScore = parseInt(e.target.value); // Convierte el valor del input en un entero
    setReview({ ...review, score: newScore });
  };

  const handlePostReview = () => {
    dispatch(createReviews(review))
    alert('Su reseña fue enviada con exito!')
    // Luego puedes restablecer el formulario si lo deseas
    setReview({
      score: 0,
      comment: '',
      userId: '',
      bookId: '',
    });
  };

  return (
    <div className={style.container}>
      <div className={style.postCard}>
        <textarea
          placeholder="¿Danos tu opinión sobre el libro?"
          value={review.comment}
          onChange={handleCommentChange}
        ></textarea>
        <hr />
        <h3>Nombre del Libro</h3>
        <div className={style.rating}>
          <input
            value="5"
            name="rate"
            id="star5"
            type="radio"
            onChange={handleRatingChange}
          />
          <label title="text" htmlFor="star5"></label>
          <input
            value="4"
            name="rate"
            id="star4"
            type="radio"
            onChange={handleRatingChange}
          />
          <label title="text" htmlFor="star4"></label>
          <input
            value="3"
            name="rate"
            id="star3"
            type="radio"
            onChange={handleRatingChange}
          />
          <label title="text" htmlFor="star3"></label>
          <input
            value="2"
            name="rate"
            id="star2"
            type="radio"
            onChange={handleRatingChange}
          />
          <label title="text" htmlFor="star2"></label>
          <input
            value="1"
            name="rate"
            id="star1"
            type="radio"
            onChange={handleRatingChange}
          />
          <label title="text" htmlFor="star1"></label>
        </div>
        <button className={style.post} onClick={handlePostReview}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ReseñasView;
