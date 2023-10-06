import axios from 'axios'
import { UPDATE_AUTHOR } from '../types'
// import { UPDATE_BOOK } from '../types'

export const updateBook = (form, id) => {
  return async () => {
    try {
      await axios.put(`/books/update/${id}`, form)
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateAuthor = ({id, name}) => {
  return async(dispatch) => {
    try {
      const {data} = await axios.put(`/author/update/${id}`, {name})
      dispatch({
        type: UPDATE_AUTHOR,
        payload :data
      })
    } catch (error) {
      console.log(error)
    }
  } 
}
