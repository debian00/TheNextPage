import { useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
// import { getGenres } from '../../redux/actions/actionGet'; // Importa la función
import axios from 'axios'
import { useEffect } from 'react'
import style from './chatbot.module.css'
import Card from '../../Components/CardIndividual/Card'
import { useDispatch} from 'react-redux'
import { getAllBooksCopy } from '../../redux/actions/actionGet'
// import DetailView from '../../Views/DetailView/DetailView'

const theme = {
  background: '#AAEEC4',
  headerBgColor: '#6F5475',
  headerFontSize: '20px',
  botBubbleColor: '#6F5475',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#6F5475',
  userFontColor: 'white',
}

const config = {
  floating: true,
}

const ComponentCategorias = () => {
  const [generoLibro, setGeneroLibro] = useState(null)

  useEffect(() => {
    const obtenerGeneroLibro = async () => {
      const { data } = await axios.get(`/genre`)
      setGeneroLibro(data)
    }
    obtenerGeneroLibro()
  }, [])

  return (
    <div>
      <ul>
        {generoLibro?.length > 0 ?(
          generoLibro?.map((ele, index) => (
            <li key={ele.id}>
              {index + 1} - {ele.name}
            </li>
          ))
        ):(<h1>No hay libros con ese género</h1>)}
        {/* {!generoLibro && <h1>No hay libros con ese género</h1>} */}
      </ul>
    </div>
  )
}

const ComponentGeneros = (respuestaUsuario2) => {
  const infoLibro =
    respuestaUsuario2 &&
    respuestaUsuario2.previousStep &&
    respuestaUsuario2.previousStep.message
  const [generoLibro, setGeneroLibro] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const obtenerGeneroLibro = async () => {
      const { data } = await axios.get(`/books?genre=${infoLibro}`)
      setGeneroLibro(data)
    }
    dispatch(getAllBooksCopy())
    obtenerGeneroLibro()
  }, [])

  return (
    <div>
      <p>Libros con el género: {infoLibro}</p>
      <ul>
        {generoLibro?.rows?.map((ele) => (
          <div key={ele.id}>
            <Card
              title={ele.title}
              image={ele.images[0]}
              price={ele.sellPrice}
              id={ele.id}
              author={ele.author}
              availability={ele.availability}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}

const ComponentLibros = (respuestaUsuario) => {

  const [infoLibro, setInfoLibro] = useState(null)
  console.log('Nombre estado local', infoLibro)


  useEffect(() => {
    const obtenerNombreLibro = async () => {
      const infoLibro =
        respuestaUsuario &&
        respuestaUsuario.previousStep &&
        respuestaUsuario.previousStep.message
      if (infoLibro) {
        // Realiza una solicitud al servidor para obtener libros basados en el título proporcionado por el usuario
        const { data } = await axios.get(`/books?title=${infoLibro}`)
        // console.log('infodellibo',data);
        // const nameLibros = data?.rows?.map((ele) => ele.title);
        // const nombreFinal = nameLibros[0];
        setInfoLibro(data)
      }
    }

    obtenerNombreLibro()
  }, [respuestaUsuario])

  return (
    <div className={style.content}>
      <p>Relacion de libros con el nombre </p>
      {infoLibro?.rows?.map((ele) => (
        <div key={ele.id}>
          <Card
            title={ele.title}
            image={ele.images[0]}
            price={ele.sellPrice}
            id={ele.id}
            author={ele.author}
            availability={ele.availability}
          />
        </div>
      ))}
    </div>
  )
}

const ComponentAutor = (respuestaUsuario3) => {
  const infoLibro =
    respuestaUsuario3 &&
    respuestaUsuario3.previousStep &&
    respuestaUsuario3.previousStep.message;
  const [generoLibro, setGeneroLibro] = useState(null);


  useEffect(() => {
    const obtenerGeneroLibro = async () => {
      const { data } = await axios.get(`/books?author=${infoLibro}`);
      setGeneroLibro(data);
    };
    obtenerGeneroLibro();
  }, [infoLibro]);

  return (
    <div className={style.content}>
      <p>Relación de libros del autor: {infoLibro}</p>
      <ul>
        {generoLibro?.rows?.map((ele) => (
          <div key={ele.id}>
            <Card
              title={ele.title}
              image={ele.images[0]}
              price={ele.sellPrice}
              id={ele.id}
              author={ele.author}
              availability={ele.availability}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

function Chatbot() {
  const [respuestaUsuario, setRespuestaUsuario] = useState('')
  const [respuestaUsuario2, setRespuestaUsuario2] = useState('')
  const [respuestaUsuario3, setRespuestaUsuario3] = useState('')
  console.log('respuestaUsuario', respuestaUsuario)
  console.log('respuestaUsuario2', respuestaUsuario2)

  const steps = [
    {
      id: '0',
      message:
        '¡Hola! Soy el asistente virtual de The Next Page. ¿En qué puedo ayudarte hoy?',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Por favor, selecciona una de las siguientes opciones:',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        {
          value: 'buscar_libros',
          label: 'Buscar libros',
          trigger: 'pregunta_busqueda',
        },
        {
          value: 'ver_categorias',
          label: 'Ver categorías',
          trigger: (value) => {
            setRespuestaUsuario2(value.value) // Actualiza el estado con la respuesta del usuario
            return 'mostrar_categorias_resultados'
          },
        },
        {
          value: 'autor',
          label: 'Buscar por autor',
          trigger: 'pregunta_busqueda_autor',
        },
      ],
    },
    {
      id: 'pregunta_busqueda',
      message: 'Genial, ¿qué tipo de libro estás buscando?',
      trigger: 'esperar_respuesta_busqueda',
    },
    {
      id: 'esperar_respuesta_busqueda',
      user: true,
      trigger: (value) => {
        setRespuestaUsuario(value.value) // Actualiza el estado con la respuesta del usuario
        return 'mostrar_resultados'
      },
    },
    {
      id: 'mostrar_resultados',
      component: <ComponentLibros respuestaUsuario={respuestaUsuario} />,
      trigger: 'pregunta_otra_busqueda',
    },
    {
      id: 'pregunta_otra_busqueda',
      options: [
        {
          value: 'si',
          label: 'Sí, quiero buscar otro libro',
          trigger: 'pregunta_busqueda',
        },
        { value: 'no', label: 'No, gracias', trigger: '1' },
      ],
    },
    {
      id: 'mostrar_categorias_resultados',
      component: <ComponentCategorias />,
      trigger: 'mostrar_libros_por_categoria',
    },
    {
      id: 'mostrar_libros_por_categoria',
      message: '¿qué tipo de genero estás buscando ingresa el numero?:',
      trigger: 'esperar_categoria',
    },
    {
      id: 'esperar_categoria',
      user: true,
      trigger: (value) => {
        setRespuestaUsuario2(value.value) // Actualiza el estado con la respuesta del usuario
        return 'mostrar_libro_por_genero'
      },
    },
    {
      id: 'mostrar_libro_por_genero',
      component: <ComponentGeneros respuestaUsuario2={respuestaUsuario2} />,
      trigger: 'pregunta_otra_categoria',
    },
    {
      id: 'pregunta_otra_categoria',
      options: [
        {
          value: 'si',
          label: 'Sí, quiero explorar otra categoría',
          trigger: 'mostrar_categorias_resultados',
        },
        { value: 'no', label: 'No, gracias', trigger: '1' },
      ],
    },
    {
      id: 'pregunta_busqueda_autor',
      message: 'Genial, ¿ingresa el nombre del autor que estás buscando?',
      trigger: 'esperar_respuesta_busqueda_autor',
    },
    {
      id: 'esperar_respuesta_busqueda_autor',
      user: true,
      trigger: (value) => {
        setRespuestaUsuario3(value.value); // Actualiza el estado con la respuesta del usuario
        return 'mostrar_resultados_autor';
      },
    },
    {
      id: 'mostrar_resultados_autor',
      component: <ComponentAutor respuestaUsuario3={respuestaUsuario3} />,
      trigger: 'pregunta_otra_busqueda_autor',
    },
    {
      id: 'pregunta_otra_busqueda_autor',
      options: [
        {
          value: 'si',
          label: 'Sí, quiero buscar otro autor',
          trigger: 'pregunta_busqueda_autor',
        },
        { value: 'no', label: 'No, gracias', trigger: '1' },
      ],
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <ChatBot headerTitle="Library Assistant" steps={steps} {...config} />
    </ThemeProvider>
  )
}

export default Chatbot
