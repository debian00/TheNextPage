import { useEffect, useState } from 'react'
import styles from '../CatalogueView/catalogue.module.css'
import RenderCard from './RenderCard/RenderCard'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../redux/actions/actionGet'

function CatalogueView() {
  const location = useLocation()
  const [visibleGenres, setVisibleGenres] = useState(10)

  const genres = useSelector((state) => state.genres)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenres())
  }, [])
  const searchParams = new URLSearchParams(location.search)
  const genreValue = searchParams.get('genre')
  // const [filter, setFilter] = useState({
  //   genre: genreValue ? genreValue : '',
  //   author: '',
  //   sellPriceMin: 0,
  //   sellPriceMax: 0,
  //   publishYearMin: 1500,
  //   publishYearMax: 2023,
  // })
  console.log(genreValue)
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h3 style={{ fontSize: '25px', marginLeft: '13px', marginBottom: '0' }}>
          Preferencias!
        </h3>
        {/* <div className={styles.filterInput}>
          <label className={`form-label ${styles.label}`}>Generos</label>
          <select name="location" className={styles.input}>
            <option name="location">Cambiar Generos</option>
          </select>
        </div> */}
        <div className={`${styles.filterInput}`}>
          <label
            htmlFor="inputName"
            style={{
              marginRight: '10px',
              fontSize: '18px',
              fontWeight: 'bolder',
            }}
            className={`form-label ${styles.label}`}
          >
            Generos
          </label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {genres?.slice(0, visibleGenres).map((e, index) => {
              console.log(e)
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <label className="form-label">{e.name}</label>
                  <input
                    type="checkbox"
                    name={e.name}
                    value={e.id}
                    style={{ width: '15px' }}
                  ></input>
                </div>
              )
            })}
            {visibleGenres < genres.length && (
              <p
                className={styles.verMas}
                onClick={() => setVisibleGenres((prev) => prev + 10)}
              >
                Ver mas
              </p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.render}>
        <RenderCard></RenderCard>
      </div>
    </div>
  )
}

export default CatalogueView
