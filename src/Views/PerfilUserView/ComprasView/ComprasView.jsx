// import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import style from './comprasview.module.css'
import { useEffect, useState } from 'react'
import { getSaleByUser } from '../../../redux/actions/actionGet'
import CardReview from '../../../Components/CardReview/CardReview'

const ComprasView = () => {
  //Traer mis reviews
  const mySales = useSelector((state) => state.sale)

  const dispatch = useDispatch()
  useEffect(() => {
    const { id } = JSON.parse(localStorage.getItem('user'))
    dispatch(getSaleByUser(id))
  }, [localStorage.getItem('user')])
  return (
    <div className={style.container}>
      {mySales?.map((ele) => {
        return (
          <div style={{ display: 'flex', width: '100%' }} key={ele.id}>
            <CardReview
              id={ele.id}
              author={ele.book?.author}
              title={ele.book?.title}
              price={ele.totalPrice}
              quantity={ele.quantity}
              image={ele.book?.images[0]}
              bookId={ele.book?.id}
              userId={ele.userId}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ComprasView
