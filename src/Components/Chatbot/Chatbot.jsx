import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const steps = [
    {
      id: '0',
      message: 'Bienvenido a The Next page ¿En qué puedo ayudarte hoy?',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Selecciona una de las siguientes opciones:',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'buscar_libros', label: 'Buscar libros', trigger: 'preguntar_tipo_busqueda' },
        { value: 'ver_categorias', label: 'Ver categorías', trigger: 'ver_categorias' },
        { value: 'contacto', label: 'Contacto', trigger: 'contacto' },
      ],
    },
    {
      id: 'preguntar_tipo_busqueda',
      message: 'Genial, puedes buscar libros por título, autor o género. ¿Cómo te gustaría buscar?',
      trigger: 'esperar_respuesta_busqueda',
    },
    {
      id: 'esperar_respuesta_busqueda',
      user: true,
      trigger: 'mostrar_resultados',
    },
    {
      id: 'mostrar_resultados',
      component: (
        <div>
          Aquí irían los resultados de la búsqueda (lista de libros).
          
          ¿Quieres realizar otra búsqueda?
        </div>
      ),
      trigger: 'preguntar_otra_busqueda',
    },
    {
      id: 'preguntar_otra_busqueda',
      options: [
        { value: 'si', label: 'Sí', trigger: 'preguntar_tipo_busqueda' },
        { value: 'no', label: 'No', trigger: '1' },
      ],
    },
    {
      id: 'ver_categorias',
      message: 'Tenemos los siguientes géneros de libros:',
      trigger: 'mostrar_categorias',
    },
    {
      id: 'mostrar_categorias',
      options: [
        { value: 'ficcion', label: 'Ficción', trigger: '1' },
        { value: 'no_ficcion', label: 'No Ficción', trigger: '1' },
        { value: 'ciencia_ficcion', label: 'Ciencia Ficción', trigger: '1' },
        { value: 'drama', label: 'Drama', trigger: '1' },
      ],
    },
    {
      id: 'contacto',
      message: 'Puedes contactarnos en support@libreriaenlinea.com para obtener asistencia.',
      end: true,
    },
  ];

const theme = {
  background: '#AAEEC4',
  headerBgColor: '#6F5475',
  headerFontSize: '20px',
  botBubbleColor: '#6F5475',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#6F5475',
  userFontColor: 'white',
};

const config = {

  
  floating: true,
};

function Chatbot() {
  const { location } = useParams(); // Obtén el parámetro 'location' de la URL
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleCitySelection = () => {
   // Realiza redirección a la página de propiedades con el parámetro 'location'
    navigate(`/property/${location}`);
 };
 console.log(steps)
 

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Travel Bot"
        steps={steps}
        {...config}       
        handleEnd={handleCitySelection} // Llama a la función de redirección al finalizar el chat
      />
    </ThemeProvider>
  );
}

export default Chatbot;