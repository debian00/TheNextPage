import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { getGenres } from '../../redux/actions/actionGet'; // Importa la función

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

  const steps = [
    {
      id: '0',
      message: '¡Hola! Soy el asistente virtual de The Next Page. ¿En qué puedo ayudarte hoy?',
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
        { value: 'buscar_libros', label: 'Buscar libros', trigger: 'pregunta_busqueda' },
        { value: 'ver_categorias', label: 'Ver categorías', trigger: 'mostrar_categorias' },
        { value: 'ofertas', label: 'Ofertas del día', trigger: 'mostrar_ofertas' },
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
      trigger: 'mostrar_resultados',
    },
    {
      id: 'mostrar_resultados',
      message: 'Aquí tienes algunos libros que coinciden con tu búsqueda:',
      trigger: 'pregunta_otra_busqueda',
    },
    {
      id: 'pregunta_otra_busqueda',
      options: [
        { value: 'si', label: 'Sí, quiero buscar otro libro', trigger: 'pregunta_busqueda' },
        { value: 'no', label: 'No, gracias', trigger: '1' },
      ],
    },
    {
      id: 'mostrar_categorias',
      message: 'Tenemos una amplia variedad de categorías disponibles, como Ficción, No Ficción, Ciencia, Historia, Romance, etc. ¿Te gustaría explorar alguna categoría en particular?',
      trigger: 'esperar_categoria',
    },
    {
      id: 'esperar_categoria',
      user: true,
      trigger: 'mostrar_libros_por_categoria',
    },
    {
      id: 'mostrar_libros_por_categoria',
      message: 'Aquí tienes algunos libros de la categoría seleccionada:',
      trigger: 'pregunta_otra_categoria',
    },
    {
      id: 'pregunta_otra_categoria',
      options: [
        { value: 'si', label: 'Sí, quiero explorar otra categoría', trigger: 'mostrar_categorias' },
        { value: 'no', label: 'No, gracias', trigger: '1' },
      ],
    },
    {
      id: 'mostrar_ofertas',
      message: '¡Hoy tenemos ofertas especiales! Visita nuestra página de ofertas para conocer los descuentos disponibles.',
      trigger: '1',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Travel Bot"
        steps={steps}
        {...config}
        
      />
    </ThemeProvider>
  );
}

export default Chatbot;
