/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../CardIndividual/Card'

const CardHome = ({ books, author }) => {
  const [book, setBook] = useState([])

  const fetchBook = async () => {
    if (books) {
      let allBooks = []
      for (let i = 1; i <= 4; i++) {
        const { data } = await axios.get(`/books?page=${i}&size=10`)
        allBooks = [...allBooks, ...data.rows]
      }
      setBook(allBooks.filter((ele) => ele.title.includes(books)))
    } else if (author) {
      let allBooks = []
      for (let i = 1; i <= 4; i++) {
        const { data } = await axios.get(`/books?page=${i}&size=10`)
        allBooks = [...allBooks, ...data.rows]
      }
      setBook(allBooks.filter((ele) => ele.author[0].includes(author)))
    }
  }
  useEffect(() => {
    fetchBook()
  }, [books])
  console.log(book)

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
