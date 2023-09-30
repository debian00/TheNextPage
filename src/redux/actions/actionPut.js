import axios from "axios";
import { UPDATE_BOOK } from "../types";

export const updateBook = (form) => {
    return async(dispatch) => {
        try {
            const {data} = await axios.put('/books/update', form)
            return dispatch({
                type: UPDATE_BOOK,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}