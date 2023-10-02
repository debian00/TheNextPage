/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../CardIndividual/Card'

const CardHome = ({ books, author }) => {
  const [book, setBook] = useState([])

  const fetchBook = async () => {
    if (books) {
      let allBooks = []
      const { data } = await axios.get(`/books?page=1&size=10&title=${books}`)
      setBook(data.rows)
    } else {
      const { data } = await axios.get(`/books?page=1&size=10&author=${author}`)
      setBook(data.rows)
    }
  }
  useEffect(() => {
    fetchBook()
  }, [books])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignContent: 'center',
      }}
    >
      {book?.slice(0, 5)?.map((ele) => {
        return (
          <Card
            key={ele.id}
            title={ele.title}
            image={ele.images[0]}
            price={ele.sellPrice}
            id={ele.id}
            author={ele.author}
          ></Card>
        )
      })}
    </div>
  )
}

export default CardHome
