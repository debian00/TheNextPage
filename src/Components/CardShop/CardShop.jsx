/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import style from './CardShop.module.css'

const CardShop = ({ title, image, price, id, author }) => {
  return (
    <div
      style={{
        padding: '20px',
        paddingBottom: '0',
        maxHeight: '530px',
        width: '100%',
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1 )',
      }}
    >
      <div
        style={{
          display: 'flex',
          margin: 'auto 0',
          justifyContent: 'center',
        }}
      >
        <img
          src={
            'https://res.cloudinary.com/dkdounmsa/image/upload/v1695758724/Libros/wqvzgyradatr0vcb0466.webp'
          }
          style={{ width: '120px', height: '201px', objectFit: 'cover' }}
        />
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

export default CardShop
