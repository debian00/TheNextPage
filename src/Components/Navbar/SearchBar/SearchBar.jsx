import { useDispatch, useSelector } from 'react-redux'
import style from './SearchBar.module.css'
import { useEffect, useRef, useState } from 'react'
import { getBooksSearch } from '../../../redux/actions/actionGet'
import { Link, useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const blurRef = useRef(null)
  const searches = useSelector((state) => state.searchs)

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  const handleClickOutside = (event) => {
    if (
      blurRef.current &&
      !blurRef.current.contains(event.target) &&
      event.target.id !== 'dropdown'
    ) {
      setVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    dispatch(getBooksSearch(search))
  }, [dispatch, search])

  const handleOnClose = () => {
    setVisible(true)
  }
  console.log(searches)

  return (
    <div className={style.inputContainer}>
      <input
        onChange={handleSearch}
        type="search"
        className={style.input}
        placeholder="Busca tu libro favorito"
        onClick={handleOnClose}
      ></input>
      {visible ? (
        <div className={style.dropdown} id="dropdown" ref={blurRef}>
          <ul>
            {searches?.slice(0, 5).map((ele) => {
              return (
                <Link
                  to={`/detail/${ele.id}`}
                  style={{ textDecoration: 'none' }}
                  key={ele.id}
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
