import { useDispatch } from 'react-redux'
import style from './SearchBar.module.css'
import { useEffect, useState } from 'react'
import { getAuthorSearch } from '../../../redux/actions/actionGet'
const SearchBar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  useEffect(() => {
    dispatch(getAuthorSearch(search))
  }, [dispatch, search])

  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        onChange={handleSearch}
        name="text"
        className={style.input}
        placeholder="Busca tu libro / autor favorito"
      ></input>
      <div className={style.dropdown}></div>
    </div>
  )
}

export default SearchBar
