import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookById } from '../../redux/actions/actionGet'; // Asegúrate de que la importación sea correcta
import styles from './detail.module.css';
import { useParams } from "react-router-dom";

function DetailView() {
  const { id } = useParams(); 
  const bookData = useSelector((state) => state.bookById); // Accede a los datos del libro desde Redux (state.bookById)
  const dispatch = useDispatch();

  useEffect(() => {
    // Llama a la acción getBookById para obtener los datos del libro
    dispatch(getBookById(id)); // Reemplaza "1" con el ID del libro que deseas obtener
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {/* Caja Izquierda con Imagen */}
      <div className={styles.leftBox}>
        <img src={bookData.images} alt="Imagen" />
      </div>
      {/* Caja Derecha con Texto */}
      <div className={styles.rightBox}>
        <h1 className={styles.title}>{bookData.title}</h1>
        <h2 className={styles.author}>{bookData.author}</h2>
        <h2 className={styles.resume}>{bookData.description}</h2>
      </div>
    </div>
  );
}

export default DetailView;
