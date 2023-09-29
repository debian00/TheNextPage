/* eslint-disable react/prop-types */
import style from './card.module.css'
const Card = ({ title, price, author, image }) => {
  console.log(title)
  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        paddingBottom: '0',
        minHeight: '430px',
        minWidth: '300px',
        margin: '20px',
        boxShadow:
          '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1 )',
      }}
      className={style.card}
    >
      <img src={image} style={{ width: '200px' }} />
      <div>
        <p
          style={{
            textAlign: 'left',
            marginBottom: '0',
            color: 'grey',
            fontFamily: 'sans-serif',
            marginTop: '5px',
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
