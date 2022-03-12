import { RefreshIcon } from '../Icons'
import styles from './Loader.module.scss'
const Loader = () => {
  return (
    <div className={styles.background}>
      <section className={styles.loader}>
        <RefreshIcon />
      </section>
    </div>
  )
}

export default Loader
