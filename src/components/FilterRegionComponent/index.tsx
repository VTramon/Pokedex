import styles from './FilterRegionComponent.module.scss'
import { useDispatch } from 'react-redux'
import {
  toHoenn,
  toJohto,
  toKanto,
  toSinnoh,
  toUnova,
} from '../../Redux/features/filter/filterSlice'

const FilterRegionComponent = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.filter_region_list}>
      <span>
        <button onClick={() => dispatch(toKanto())} value="Kanto">
          Kanto
        </button>
      </span>
      <span>
        <button onClick={() => dispatch(toJohto())} value="Johto">
          Johto
        </button>
      </span>
      <span>
        <button onClick={() => dispatch(toHoenn())} value="Hoenn">
          Hoenn
        </button>
      </span>
      <span>
        <button onClick={() => dispatch(toSinnoh())} value="Sinnoh">
          Sinnoh
        </button>
      </span>
      <span>
        <button onClick={() => dispatch(toUnova())} value="Unova">
          Unova
        </button>
      </span>
    </div>
  )
}

export default FilterRegionComponent
