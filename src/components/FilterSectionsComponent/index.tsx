import { useState } from 'react'
import FilterRegionComponent from '../FilterRegionComponent'
import styles from './FilterSectionsComponent.module.scss'

type FilterSectionProps = null | 'region' | 'type' | 'shape'

type FilterSectionsComponentProps = {
  setIsOpen: (value: FilterSectionProps) => void
}

const FilterSectionsComponent: React.FC<FilterSectionsComponentProps> = ({
  setIsOpen,
}) => {
  const [value, setValue] = useState<FilterSectionProps>(null)

  const HandleClick = (param: FilterSectionProps) => {
    if (value === null) {
      setValue(param)
      setIsOpen(param)
    } else {
      setValue(null)
      setIsOpen(null)
    }
  }

  return (
    <>
      <div className={styles.filter_button_container}>
        <button onClick={() => HandleClick('region')}>Regions</button>
      </div>

      <div className={styles.filter_button_container}>
        <button onClick={() => HandleClick('type')}>Types</button>
      </div>

      <div className={styles.filter_button_container}>
        <button onClick={() => HandleClick('shape')}>Shapes</button>
      </div>
    </>
  )
}

export default FilterSectionsComponent
