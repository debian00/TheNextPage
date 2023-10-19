import  { useState } from "react";
import styles from "./faqView.module.css"; // Importa tus estilos CSS Modules


const FAQ = () => {
  const faqData = [
    {
      question: "¿Cómo puedo buscar libros en la librería en línea?",
      answer:
        "Para buscar libros en nuestra librería en línea, simplemente utiliza la barra de búsqueda en la parte superior de la página. Puedes ingresar palabras clave, títulos de libros o nombres de autores para encontrar los libros que te interesan.",
    },
    {
      question: "¿Cuáles son las opciones de pago disponibles para comprar libros?",
      answer:
        "Actualmente, aceptamos pagos a través de Stripe como nuestro método de pago principal. Estamos trabajando en la incorporación de más opciones de pago en el futuro para mayor comodidad. Durante el proceso de compra, podrás seleccionar tu método de pago preferido.",
    },
    {
      question:
        "¿Cómo puedo ponerme en contacto con el servicio de atención al cliente?",
      answer:
        "Puedes comunicarte con nuestro servicio de atención al cliente a través de la página de contacto en nuestro sitio web. Estaremos encantados de ayudarte con cualquier pregunta o inquietud que tengas sobre nuestra librería en línea.",
    },
    {
      question: "¿Qué debo hacer si deseo devolver un libro?",
      answer:
        "Si necesitas devolver un libro que compraste, comunícate con nuestro equipo de atención al cliente. Te proporcionaremos instrucciones detalladas sobre el proceso de devolución y la política de reembolso correspondiente.",
    },
    {
      question: "¿Cómo puedo explorar las recomendaciones de libros?",
      answer:
        "Para explorar nuestras recomendaciones de libros, visita la sección de 'Recomendados' en nuestro sitio web. Nuestro equipo de expertos en libros selecciona cuidadosamente una variedad de títulos que creemos que te encantarán.",
    },
    {
      question: "¿Puedo recibir actualizaciones sobre nuevos lanzamientos y ofertas especiales?",
      answer:
        "¡Claro que sí! Te animamos a suscribirte a nuestro boletín informativo para recibir actualizaciones sobre nuevos lanzamientos, ofertas especiales y eventos de nuestra librería en línea. Mantente al tanto de las últimas novedades literarias.",
    },
    {
      question: "¿Cuál es el proceso para comprar un libro en la librería en línea?",
      answer:
        "Comprar un libro en nuestra librería en línea es fácil. Simplemente busca el libro que deseas, haz clic en 'Comprar' y sigue las instrucciones para completar la compra. Puedes elegir tu método de pago y proporcionar la información de envío durante el proceso de compra.",
    },
    {
      question: "¿Qué medidas de seguridad se aplican a mi información de pago?",
      answer:
        "Tu seguridad es nuestra prioridad. Utilizamos tecnologías de cifrado seguras para proteger tus datos de pago. Además, nunca compartimos tu información con terceros sin tu consentimiento. Puedes comprar con confianza en nuestra librería en línea.",
    },
    {
      question:
        "¿Cómo puedo acceder a mis libros digitales después de comprarlos?",
      answer:
        "Una vez que hayas completado la compra de un libro digital en nuestra librería en línea, podrás acceder a él inmediatamente. Ve a tu biblioteca digital en tu cuenta y encontrarás todos tus libros digitales comprados listos para su descarga o lectura en línea.",
    },
    {
      question: "¿Qué opciones de envío están disponibles para libros físicos?",
      answer:
        "Ofrecemos varias opciones de envío para libros físicos, incluyendo envío estándar y express. Durante el proceso de compra, podrás seleccionar la opción de envío que mejor se adapte a tus necesidades y plazos de entrega.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [active2Index, setActive2Index] = useState(null);

  const handleQuestionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const handleQuestionClick2 = (index2) => {
    if (index2 === active2Index) {
      setActive2Index(null);
    } else {
      setActive2Index(index2);
    }
  };

  return (
    <div className={styles["wrap"]}>
      <div className={styles["faq-container"]}>
      <h1
          style={{
            marginTop: '3rem',
            fontSize: '52px',
            fontWeight: 'bold',
            justifyContent: 'center',
            display: 'flex',
            marginBottom :'1rem',
            color:'#161616',
          }}
        >
          Preguntas Frecuentes
        </h1>
        <div className="row">
          <div className="col-6">
            <ul className={styles["faq-list"]}>
              {faqData.slice(0, 5).map((faq, index) => (
                <li
                  key={index}
                  className={`${styles["faq-item"]} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <div className={styles["faq-question"]}>{faq.question}</div>
                  {activeIndex === index && (
                    <div className={styles["faq-answer"]}>{faq.answer}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <ul className={styles["faq-list"]}>
              {faqData.slice(5, 10).map((faq, index2) => (
                <li
                  key={index2}
                  className={`${styles["faq-item"]} ${
                    active2Index === index2 ? styles.active : ""
                  }`}
                  onClick={() => handleQuestionClick2(index2)}
                >
                  <div className={styles["faq-question"]}>{faq.question}</div>
                  {active2Index === index2 && (
                    <div className={styles["faq-answer"]}>{faq.answer}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
