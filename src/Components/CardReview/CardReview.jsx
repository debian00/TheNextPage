/* eslint-disable react/prop-types */
import { useState } from 'react'
import React from 'react'
import style from './CardReview.module.css'
import { useDispatch } from 'react-redux'
import { postReview } from '../../redux/actions/actionPost'
import { showSuccessNotification } from '../../utils/Toast'

const CardReview = ({
  author,
  price,
  image,
  title,
  quantity,
  id,
  bookId,
  userId,
}) => {
  const [review, setReview] = useState({
    score: 1,
    comment: '',
    bookId,
    userId,
  })
  const dispatch = useDispatch()
  const handleReview = (e) => {
    const { name, value } = e.target

    setReview((prevReview) => ({
      ...prevReview,
      [name]: name === 'score' ? Number(value) : value,
    }))
  }

  const submitReview = () => {
    dispatch(postReview(review))
    showSuccessNotification('Reseña creada con exito!')
  }

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div
        style={{
          padding: '20px',
          paddingBottom: '0',
          maxHeight: '530px',
          width: '100%',
          boxShadow:
            '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1 )',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: 'auto 0',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <img
            src={image}
            style={{
              width: '140px',
              height: '160px',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
        <div className={style.title}>
          <div>
            <p
              style={{
                textAlign: 'left',
                marginBottom: '0',
                color: 'grey',
                fontFamily: 'sans-serif',
                marginTop: '5px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </p>
            <p
              style={{
                textAlign: 'left',
                marginBottom: '0',
                color: 'grey',
                fontFamily: 'sans-serif',
              }}
            >
              Por{' '}
              <span
                style={{
                  color: '#033d7b',
                  fontFamily: "'Roboto'",
                  fontSize: '16px',
                  height: '0',
                }}
              >
                {author}
              </span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <p style={{ textAlign: 'center', margin: '0' }}>Precio:</p>
              <h3 style={{ textAlign: 'right', paddingBottom: '5px' }}>
                ${price}
              </h3>
            </div>
            <div>
              <p style={{ textAlign: 'center', margin: '0' }}>Cantidad:</p>
              <div
                style={{ display: 'flex', flexDirection: 'row' }}
                className={style.quantity}
              >
                <p>{quantity}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              data-bs-target={`#exampleModal-${id}`}
              data-bs-toggle="modal"
            >
              Dar reseña
            </button>
          </div>
        </div>
      </div>
      <div
        className={`modal fade ${style.customFade}`}
        id={`exampleModal-${id}`}
        aria-labelledby={`exampleModalXlLabel-${id}`}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl "
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3>Dar reseña a {title}</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ margin: '0' }}
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className={style.postCard}>
                <textarea
                  onChange={handleReview}
                  name="comment"
                  value={review.comment}
                  placeholder="¿Danos tu opinión sobre el libro?"
                ></textarea>
                <hr />
                <p
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontSize: '20px',
                  }}
                >
                  {title}
                </p>
                <div className={style.rating}>
                  {[5, 4, 3, 2, 1].map((value) => (
                    <React.Fragment key={value}>
                      <input
                        value={value}
                        name="score"
                        id={`star${id}-${value}`}
                        type="radio"
                        onChange={handleReview}
                      />
                      <label
                        title="text"
                        htmlFor={`star${id}-${value}`}
                      ></label>
                    </React.Fragment>
                  ))}
                </div>
                <button
                  className={style.post}
                  onClick={() => {
                    submitReview
                  }}
                  data-bs-dismiss="modal"
                  data-bs-target={`exampleModal-${id}`}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardReview
