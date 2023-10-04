import axios from 'axios'
import { UPDATE_BOOK } from '../types'

export const updateBook = (form, id) => {
  return async (dispatch) => {
    try {
      await axios.put(`/books/update/${id}`, form)
    } catch (error) {
      console.log(error)
    }
  }
}
