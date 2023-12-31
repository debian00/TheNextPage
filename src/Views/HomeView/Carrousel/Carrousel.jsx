/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import style from './Carrousel.module.css'
import image1 from '../../../assets/imghome/gatsby.jpg'
import image2 from '../../../assets/imghome/comic.jpg'
import image3 from '../../../assets/imghome/davinci.jpg'
const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animationActive, setAnimationActive] = useState(false)

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex)
    setAnimationActive(true)
    setTimeout(() => {
      setAnimationActive(false)
    }, 300)
  }

  const slides = [
    {
      bgImage: image1,
    },
    {
      bgImage: image2,
    },
    {
      bgImage: image3,
    },
  ]

  return (
    <div className={style.landing}>
      <Carousel
        interval={2000}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className={`${style.imageContainer}`}>
              <img
                className="d-block w-100"
                src={slide.bgImage}
                alt={`Slide ${index + 1}`}
              />
              <div className={`${style.centeredCaption}`}></div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Carrousel
