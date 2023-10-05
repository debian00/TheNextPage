
import axios from "axios"

export const deleteUserById = (id) => {
    return async() => {
        try {
            const {data} = await axios.delete('/users/delete/'+ id)
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteBookById = (id) => {
    return async() => {
        try {
            const {data} = await axios.delete('/books/delete/' + id)
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
}