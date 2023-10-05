/* eslint-disable react/prop-types */
import Card from '../CardIndividual/Card'
import style from './Cards.module.css'
const Cards = ({ allBooks }) => {
  return (
    <div className={style.container}>
      {allBooks?.map((ele) => {
        return (
          <Card
            key={ele.id}
            id={ele.id}
            image={ele.images[0]}
            title={ele.title}
            price={ele.sellPrice}
            author={ele.author}
            availability={ele.availability}
          />
        )
      })}
    </div>
  )
}

export default Cards
