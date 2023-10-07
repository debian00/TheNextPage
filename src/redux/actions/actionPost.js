import axios from 'axios'

export const createBook = (form) => {
  const { images } = form
  return async () => {
    try {
      const { data } = await axios.post('/books/create', form, {
        images: [images],
      })
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }
}

export const postAuthor = (name) => {
    return async () => {
        try {
            const {data} = await axios.post('/author/create', {name})
            console.log(data);
        } catch (error) {
            console.log(error.response.data.error) 
        }
    }
}

export const postGenre = (name) => {
    return async () => {
        try {
            const {data} = await axios.post('/genre/create', {name})
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

export const CreateUser = async (register, setModal, navigate) => {

    try {
          const {data} = await axios.post("/users/create" , register);

          data.success === true 
          ? setModal({access : true, body : data})
          : setModal({access : false , body : data});
          localStorage.setItem("token" , JSON.stringify(data.registrationToken))
          localStorage.setItem("user" , JSON.stringify(data.data))
          setTimeout(() => {
            setModal(false);
            navigate("/home");
          }, 1500);
          return;

    } catch (error) {
        
        setModal({access : true , body : error.message});
        setTimeout(() => {
            setModal({access : false });
        }, 1000);
        return
    }
};

export const getLogin = async (login , setModal , navigate) => {

    try {
        const {data} = await axios.post("/login" , login);
        
        data.success 
        ?  (
            setModal({access : true , body : data.data}),
            localStorage.setItem("token" , data.token),
            localStorage.setItem("user" , JSON.stringify(data.data)),
            
            setTimeout(() => {
                            setModal({access : false })
                            navigate("/home")
                        }, 1500)
                       
        ) :   
        (setModal({access : true , body : data.msg}));
        setTimeout(() => {
            setModal({access : false })
        }, 1500)
            

    } catch (error) {
        setModal({access : true , body : error.error})
        setTimeout(() => {
            setModal({access : false })
        }, 1000);
        return;
    }
} ;