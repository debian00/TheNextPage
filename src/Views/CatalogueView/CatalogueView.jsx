import styles from '../CatalogueView/catalogue.module.css'
import RenderCard from './RenderCard/RenderCard'

function CatalogueView() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.filter}></div> */}
      <div className={styles.render}>
        <RenderCard></RenderCard>
      </div>
    </div>
  )
}

export default CatalogueView
