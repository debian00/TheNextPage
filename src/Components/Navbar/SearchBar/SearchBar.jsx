import { useDispatch, useSelector } from 'react-redux'
import style from './SearchBar.module.css'
import { useEffect, useState } from 'react'
import { getBooksSearch } from '../../../redux/actions/actionGet'
import { Link } from 'react-router-dom'
const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const searches = useSelector((state) => state.searchs)

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  useEffect(() => {
    setVisible(true)
    dispatch(getBooksSearch(search))
  }, [dispatch, search])

  const handleOnClose = () => {
    setTimeout(() => {
      setVisible(false)
    }, 10) // Adjust the delay as needed
  }
  console.log(searches)

  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        onChange={handleSearch}
        name="text"
        className={style.input}
        placeholder="Busca tu libro favorito"
        onBlur={handleOnClose}
      ></input>
      {visible && search.length > 1 ? (
        <div className={style.dropdown}>
          <ul>
            {searches?.slice(0, 5).map((ele) => {
              return (
                <Link
                  to={`/detail/${ele.id}`}
                  style={{ textDecoration: 'none' }}
                  key={ele}
                >
                  <li style={{ color: 'gray' }}>{ele.title}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SearchBar
