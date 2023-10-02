/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import style from './card.module.css'
const Card = ({ title, price, author, image, id }) => {
  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        paddingBottom: '0',
        maxHeight: '530px',
        maxWidth: '220px',
        width: '220px',
        margin: '20px',
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1 )',
      }}
      className={style.card}
    >
      <div
        style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center' }}
      >
        <Link to={`/detail/${id}`}>
          <img
            src={image}
            style={{ width: '150px', height: '221px', objectFit: 'cover' }}
          />
        </Link>
      </div>
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
        <h3 style={{ textAlign: 'right', paddingBottom: '5px' }}>${price}</h3>
      </div>
    </div>
  )
}

export default Card
