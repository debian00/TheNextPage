import { useState } from 'react'
import style from './reseñasview.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createReviews } from '../../../redux/actions/actionPost'
import { useEffect } from 'react'
import { getReviewByUser } from '../../../redux/actions/actionGet'
import CardReview from '../../../Components/CardReview/CardReview'
import ReviewCard from '../../../Components/Review/ReviewCard'
import Card from './../../../Components/CardIndividual/Card'

const ReseñasView = () => {
  const { id } = JSON.parse(localStorage.getItem('user'))
  const userReview = useSelector((state) => state.reviews)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReviewByUser(id))
  }, [])

  return (
    <div className={style.container}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {userReview.map((ele) => {
          return (
            <div key={ele.id} className={style.review}>
              <div className={style.card}>
                <img src={ele.book.images}></img>
              </div>
              <div className={style.reviewCard}>
                <ReviewCard
                  comment={ele.comment}
                  score={ele.score}
                  price={ele.price}
                  quantity={ele.quantity}
                  userId={id}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReseñasView
