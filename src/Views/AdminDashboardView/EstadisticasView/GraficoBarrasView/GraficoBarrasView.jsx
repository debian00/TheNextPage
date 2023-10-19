// import React from 'react'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBooksCopy, getAllSale} from '../../../../redux/actions/actionGet'
import axios from 'axios'
import { useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// var beneficios = [72, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60]
// var meses = [
//   'Enero',
//   'Febrero',
//   'Marzo',
//   'Abril',
//   'Mayo',
//   'Junio',
//   'Julio',
//   'Agosto',
//   'Septiembre',
//   'Octubre',
//   'Noviembre',
//   'Diciembre',
// ]

var misoptions = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: 'rgba(0, 220, 195)' },
    },
  },
}

// var midata = {
//   labels: meses,
//   datasets: [
//     {
//       label: 'Beneficios',
//       data: beneficios,
//       backgroundColor: 'rgba(0, 220, 195, 0.5)',
//     },
//   ],
// }
export default function Bars() {
  const librosten = useSelector((state) => state.sale);
  // const allBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [libros, setLibros] = useState([]);
  console.log('libros', libros);

  const fetchBooks = async () => {
    try {
      const books = []; // Crear un arreglo para almacenar los resultados

      for (let i = 0; i < 6; i++) {
        // Realizar pedidos y obtener la data
        const { data } = await axios.get(`/books?page=${i}`);
        books.push(...data.rows);
      }
      setLibros(books);
    } catch (error) {
      console.error('Error al cargar libros:', error);
    }
  };

  // Llama a fetchBooks para iniciar la carga de libros
  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSale());
    dispatch(getAllBooksCopy());
  }, [dispatch]);

  const bookCounts = {};

  // Calcular el recuento de cada libro
  librosten.forEach((sale) => {
    const { bookId } = sale;
    if (bookCounts[bookId]) {
      bookCounts[bookId] += 1;
    } else {
      bookCounts[bookId] = 1;
    }
  });

  const labels = Object.keys(bookCounts);
  const data = Object.values(bookCounts);
  const labelsWithNames = labels.map((id) => {
    const book = libros.find((book) => book.id === id);
    return book ? book.title : id;
  });

  const newChartData = {
    labels: labelsWithNames,
    datasets: [
      {
        label: 'Recuento de Libros',
        data: data,
        backgroundColor: 'rgba(0, 220, 195, 0.5)',
      },
    ],
  };

  return <Bar data={newChartData} options={misoptions} />;
}