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
import { getAllBooksCopy, getAllSale } from '../../../../redux/actions/actionGet'

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
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 10,
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
    const librosIdIgual = librosten.map((ele) => ele.bookId);
    const allBooks = useSelector((state) => state.books);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllSale());
      dispatch(getAllBooksCopy((1)));
    }, []);
  
    // Objeto para rastrear el recuento de cada libro
    const bookCounts = {};
    
    // Calcular el recuento de cada libro
    librosIdIgual.forEach((id) => {
        if (bookCounts[id]) {
            bookCounts[id] += 1;
        } else {
            bookCounts[id] = 1;
        }
    });
    console.log('Libriyosss',bookCounts);
  
    // Crear nuevos datos para el gráfico
    const labels = Object.keys(bookCounts); // IDs de los libros
    const data = Object.values(bookCounts); // Recuentos de los libros
    const labelsWithNames = labels.map((id) => {
      const book = allBooks?.rows?.find((book) => book.id === id);
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
  