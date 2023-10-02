import { Suspense, useEffect, useState, useRef } from 'react'
import styles from '../CatalogueView/catalogue.module.css'
import RenderCard from './RenderCard/RenderCard'
import { useSelector } from 'react-redux'

function CatalogueView() {
  const [visibleGenres, setVisibleGenres] = useState(10)

  const genres = useSelector((state) => state.genres)

  const [checkedGenre, setCheckedGenre] = useState({})
  const [selectGenre, setSelectGenre] = useState({})

  const [filter, setFilter] = useState({
    genre: [],
    priceMin: 0,
    priceMax: 0,
    publishYearMin: 1814,
    publishYearMax: 2023,
    page: 1,
    order: '',
    author: '',
  })

  const handleChange = (e) => {
    const { value, name } = e.target
    setFilter({ ...filter, [name]: value, page: 1 })
  }

  const handleChecked = (e) => {
    const { name, value, checked } = e.target
    setCheckedGenre({ ...checkedGenre, [name]: checked })
    setSelectGenre({ ...selectGenre, [name]: checked ? value : '' })
    // const push = Object.values(selectAmen).map((ele) => Number(ele));
    // const amenities = push.filter((ele) => ele !== 0);
    // setFilter({ ...filter, amenities: amenities });
  }

  useEffect(() => {
    const push = Object.values(selectGenre).map((ele) => Number(ele))
    const genres = push.filter((ele) => ele !== 0)
    setFilter({ ...filter, genre: genres, page: 1 })
  }, [selectGenre])

  console.log(filter)

  return (
    <Suspense fallback={<p>Loading</p>}>
      <div className={styles.container}>
        <div className={styles.filter}>
          <h3
            style={{ fontSize: '25px', marginLeft: '13px', marginBottom: '0' }}
          >
            Preferencias
          </h3>
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
              Autor
            </label>
            <input
              onChange={handleChange}
              name={'author'}
              value={filter.author}
            ></input>
          </div>
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
              Géneros
            </label>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {genres?.slice(0, visibleGenres).map((e, index) => {
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
                      onChange={(e) => handleChecked(e)}
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
                  Ver más
                </p>
              )}
            </div>
          </div>
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
              Precios
            </label>
            <div>
              <p
                style={{ marginBottom: '5px', cursor: 'pointer' }}
                onClick={() => {
                  setFilter({
                    ...filter,
                    priceMin: 0,
                    priceMax: 0,
                    page: 1,
                  })
                }}
              >
                Todos
              </p>
              <p
                style={{ marginBottom: '5px', cursor: 'pointer' }}
                onClick={() => {
                  setFilter({
                    ...filter,
                    priceMin: 2000,
                    priceMax: 4999,
                    page: 1,
                  })
                }}
              >
                Entre 2000 - 4999
              </p>
              <p
                style={{ marginBottom: '5px', cursor: 'pointer' }}
                onClick={() => {
                  setFilter({
                    ...filter,
                    priceMin: 5000,
                    priceMax: 11999,
                    page: 1,
                  })
                }}
              >
                Entre 5000 - 11999
              </p>
              <p
                style={{ marginBottom: '5px', cursor: 'pointer' }}
                onClick={() => {
                  setFilter({
                    ...filter,
                    priceMin: 12000,
                    priceMax: 17999,
                    page: 1,
                  })
                }}
              >
                Entre 12000 - 17999
              </p>
              <p
                style={{ marginBottom: '5px', cursor: 'pointer' }}
                onClick={() => {
                  setFilter({
                    ...filter,
                    priceMin: 18000,
                    priceMax: 20000,
                    page: 1,
                  })
                }}
              >
                Entre 18000 - 20000
              </p>
            </div>
          </div>
        </div>

        <div className={styles.render}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              padding: '20px',
            }}
          >
            {/* <button
              onClick={() => {
                setFilter({ ...filter, order: 'titleAsc' })
              }}
            >
              ORDENAR
            </button> */}
            <select
              name="order"
              onChange={handleChange}
              className={styles.select}
            >
              <option value={'titleAsc'} name={'order'}>
                Ordernar A-Z
              </option>
              <option value={'titleDesc'} name={'order'}>
                Ordernar Z-A
              </option>
              <option value={'sellPriceAsc'} name={'order'}>
                Ordernar precio menor - mayor
              </option>
              <option value={'sellPriceDesc'} name={'order'}>
                Ordernar precio mayor - menor
              </option>
            </select>
          </div>
          <RenderCard filter={filter} setFilter={setFilter}></RenderCard>
        </div>
      </div>
    </Suspense>
  )
}

export default CatalogueView
