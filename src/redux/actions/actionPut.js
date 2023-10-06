import axios from 'axios'


export const updateBook = (form, id) => {
  return async () => {
    try {
      await axios.put(`/books/update/${id}`, form)
    } catch (error) {
      console.log(error)
    }
  }
}

