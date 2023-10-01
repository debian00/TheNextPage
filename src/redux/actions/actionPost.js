import axios from "axios"


export const createBook = (form) => {
    return async () => {
        try {
            const {data} = await axios.post('/books/create', form)
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}

export const postPromotion = (email) => {
    return async () => {
        try {
            const {data} = await axios.post('/sendmail', {to: email })
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}