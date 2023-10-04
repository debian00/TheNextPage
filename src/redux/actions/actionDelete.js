import { DELETE_USER_BY_ID } from "../types"
import axios from "axios"

export const deleteUserById = (id) => {
    return async(dispatch) => {
        try {
            const {data} = await axios.delete('/users/delete/'+ id)
            dispatch({
                type: DELETE_USER_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}