import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSale } from '../../../../redux/actions/actionGet';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LinesChart() {
    const librosten = useSelector((state) => state.sale);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSale());
    }, []);

    // Objeto para rastrear el recuento de IDs por mes
    const idCountsByMonth = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
    };

    // Calcular el recuento de IDs por mes
    librosten.forEach((venta) => {
        const fechaCompra = new Date(venta.purchaseDate);
        const mesCompra = fechaCompra.getMonth(); // Obtener el mes (0-11)
        const nombreMes = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(0, mesCompra));

        idCountsByMonth[nombreMes] += 1;
    });

    console.log('Recuento de IDs por mes:', idCountsByMonth);

    // Convertir el objeto en un array para usarlo en la gráfica
    const meses = Object.keys(idCountsByMonth);
    const data = meses.map((mes) => idCountsByMonth[mes]);

    var midata = {
        labels: meses,
        datasets: [
            {
                label: 'Ventas por mes',
                data: data,
                tension: 0,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
        ],
    };

    var misoptions = {
        scales: {
            y: {
                min: 0,
                max: 10,
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)' }
            }
        }
    };

    return <Line data={midata} options={misoptions} />;
}
