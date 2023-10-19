/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import styles from './ReviewCard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById } from '../../redux/actions/actionGet'
import { deleteReview } from '../../redux/actions/actionDelete'
import { showSuccessNotification } from '../../utils/Toast'
const ReviewCard = ({ id, score, comment, userId }) => {
  const user = useSelector((state) => state.user)
  console.log(user)
  const dispatch = useDispatch()
  const stars = (stars) => {
    const starDraw = []
    for (let i = 0; i < stars; i++) {
      starDraw.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          style={{ marginRight: '10px', color: 'rgb(163, 101, 224)' }}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      )
    }
    return starDraw
  }
  const noStars = (stars) => {
    const starLength = 5 - stars
    const starNoDraw = []
    for (let i = 0; i < starLength; i++) {
      starNoDraw.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          style={{ marginRight: '10px', color: 'rgb(163, 101, 224)' }}
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      )
    }
    return starNoDraw
  }
  useEffect(() => {
    dispatch(getUserById(userId))
  }, [])

  const handleDeleteReview = () => {
    dispatch(deleteReview(id))
    showSuccessNotification('La reseña se elimino con exito!')
  }
  return (
    <div className={styles.contReseña}>
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
            marginBottom: '15px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src={user?.profilePic}></img>
              <p
                style={{
                  textAlign: 'center',
                  margin: 'auto',
                }}
              >
                {user?.userName}
              </p>
            </div>
            <div>
              {stars(Math.round(score))}
              {noStars(Math.round(score))}
            </div>
          </div>
        </div>
        <p>{comment}</p>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'end',
            gap: '20px',
          }}
        >
          <button onClick={handleDeleteReview} className={styles.buttons}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
