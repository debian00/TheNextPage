/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../CardIndividual/Card'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import style from './CardHome.module.css'
const CardHome = ({ books, author, order }) => {
  const [book, setBook] = useState([])

  const fetchBook = async () => {
    if (books) {
      let allBooks = []
      const { data } = await axios.get(`/books?page=1&size=10&title=${books}`)
      setBook(data.rows)
    } else if (author) {
      const { data } = await axios.get(`/books?page=1&size=10&author=${author}`)
      setBook(data.rows)
    } else if (order) {
      const { data } = await axios.get(`/books?page=1&size=10&order=${order}`)
      setBook(data.rows)
    }
  }
  useEffect(() => {
    fetchBook()
  }, [books])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings} className={style.slider}>
      {book?.map((ele) => {
        return (
          <Card
            key={ele.id}
            title={ele.title}
            image={ele.images[0]}
            price={ele.sellPrice}
            id={ele.id}
            author={ele.author}
            availability={ele.availability}
          ></Card>
        )
      })}
    </Slider>
  )
}

export default CardHome
