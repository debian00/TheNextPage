// import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import style from './comprasview.module.css'
import { useEffect, useState } from 'react'
import { getReview } from '../../../redux/actions/actionGet'
import axios from 'axios'

const ComprasView = () => {
  //Traer mis reviews
  const myReviews = useSelector((state) => state.reviews)
  const [componenteEditar, setComponenteEditar] = useState(false)
  const [isEditing, setIsEditing] = useState(true);
  //Estado para manejar las reviews para actualizar
  const [review, setReview] = useState({
    score: 0, // Valor inicial de la calificación
    comment: '',
    userId: '78bc0cce-1af4-44bc-a241-b9faf018c686',
    bookId: '0f382f38-f02b-4a7b-aa3c-aed39e842884',
  });
  //Funcion para manejar las opiniones
  const handleCommentChange = (e) => {
    setReview({ ...review, comment: e.target.value });
  };
  //Funcion para manejar la valoracion
  const handleRatingChange = (e) => {
    const newScore = parseInt(e.target.value); // Convierte el valor del input en un entero
    console.log('rating', newScore);
    setReview({ ...review, score: newScore });
  };
  //Funcion para actualizar la review
  const handleUpdateReview = async(e, review) => {
    e.preventDefault();
    const {id} = review
    console.log('id aquie',id);
    await axios.put(`/review/update/${id}`, {score: review.score, comment:review.comment, userId:review.userId, bookId: review.bookId})
    await alert('Reseña actualizada correctamente')
    
  }
  //Funcion para deshabilitar la edicion
  const handleDisabled = () => {
    setIsEditing(false)
    setReview({
    score: 0,
    comment: '',
    userId: '78bc0cce-1af4-44bc-a241-b9faf018c686',
    bookId: '0f382f38-f02b-4a7b-aa3c-aed39e842884',
    })
  }

  console.log('mis reseñas', myReviews)
  const dispatch = useDispatch()
  const id = '4cfe720f-52ff-43ad-9b20-c202714de892'
  useEffect(() => {
    dispatch(getReview(id))
    setReview(myReviews)
  }, [])
  return (
    <div>
      <h1 className={style.titulo}>Compras hechas</h1>
      <div className={style.sepator}></div>
      <div className="row d-flex justify-content-around">
        <div className={`col-8 ${style.wrapper}`}>
          <div className={style.productImg}>
            <img
              src="http://bit.ly/2tMBBTd"
              style={{ height: '420px', width: '327' }}
              alt="Product"
            />
          </div>
          <div className={style.productInfo}>
            <div className={style.productText}>
              <h1>Harvest Vase</h1>
              <h2>by Studio and Friends</h2>
              <p>
                Harvest Vases are a reinterpretation
                <br />
                of peeled fruits and vegetables as
                <br />
                functional objects. The surfaces
                <br />
                appear to be sliced and pulled aside,
                <br />
                allowing room for growth.
              </p>
            </div>
            <div className={style.productPriceBtn}>
              <button type="button" onClick={()=> setComponenteEditar(true)}>
                Reseña
              </button>
            </div>
          </div>
        </div>
        {componenteEditar ?
          <div className={`col-3 ${style.postCard}`}> 
          <div>
              <textarea
                disabled={isEditing}
                placeholder="¿Danos tu opinión sobre el libro?"
                value={review.comment}
                onChange={handleCommentChange}
              ></textarea>
              <hr />
              <h3>Nombre del Libro</h3>
              {/* Con la propiedad checked */}
              {isEditing? 
                <div className={style.rating}>
                  <input
                    disabled={isEditing}
                    value={review.score}
                    name="score"
                    id={`star${review.score}`}
                    type="radio"
                    checked={review.score}
                  />
                  <label disabled={isEditing} title="text" htmlFor={`star${review.score}`}></label>
                  <input
                    disabled={isEditing}
                    value={review.score}
                    name="score"
                    id={`star${review.score}`}
                    type="radio"
                    checked={review.score}
                  />
                  <label disabled={isEditing} title="text" htmlFor={`star${review.score}`}></label>
                  <input
                    disabled={isEditing}
                    value={review.score}
                    name="score"
                    id={`star${review.score}`}
                    type="radio"
                    checked={review.score}
                  />
                  <label disabled={isEditing} title="text" htmlFor={`star${review.score}`}></label>
                  <input
                    disabled={isEditing}
                    value={review.score}
                    name="score"
                    id={`star${review.score}`}
                    type="radio"
                    checked={review.score}
                  />
                  <label disabled={isEditing} title="text" htmlFor={`star${review.score }`}></label>
                  <input
                    disabled={isEditing}
                    value={review.score}
                    name="score"
                    id={`star${review.score}`}
                    type="radio"
                    checked={review.score}
                  />
                  <label title="text" htmlFor={`star${review.score}`}></label>
                  <button className={style.post} onClick={handleDisabled}>
                  Editar
                </button>
                </div>
              
              :
              //Sin la propiedad checked
              <div className={style.rating}>
              <input
                value="5"
                name="rate"
                id="star5"
                type="radio"
                checked={review.score === 5}
                onChange={handleRatingChange}
              />
              <label title="text" htmlFor="star5"></label>
              <input
                value="4"
                name="rate"
                id="star4"
                type="radio"
                checked={review.score === 4}
                onChange={handleRatingChange}
              />
              <label title="text" htmlFor="star4"></label>
              <input
                value="3"
                name="rate"
                id="star3"
                type="radio"
                checked={review.score === 3}
                onChange={handleRatingChange}
              />
              <label title="text" htmlFor="star3"></label>
              <input
                value="2"
                name="rate"
                id="star2"
                type="radio"
                checked={review.score === 2}
                onChange={handleRatingChange}
              />
              <label title="text" htmlFor="star2"></label>
              <input
                value="1"
                name="rate"
                id="star1"
                type="radio"
                checked={review.score === 1}
                onChange={handleRatingChange}
              />
              <label title="text" htmlFor="star1"></label>
              <button className={style.post} onClick={(e)=>handleUpdateReview(e,  review)}>
                Actualizar
              </button>
            </div>

              }
              
          </div>
            
          </div>
        : null}

      </div>
      <div className={style.sepator}></div>
      
    </div>
  )
}

export default ComprasView
