import { useState } from 'react'
import styles from './styles.module.scss'
import { FilterSectionProps, FilterSectionsComponentProps } from './Types'

const FilterSectionsComponent: React.FC<FilterSectionsComponentProps> = ({
  setIsOpen,
}) => {
  const [value, setValue] = useState<FilterSectionProps>(null)

  const HandleClick = (param: FilterSectionProps) => {
    if (value === null) {
      setValue(param)
      setIsOpen(param)
    } else if (param !== value) {
      setValue(param)
      setIsOpen(param)
    } else {
      setValue(null)
      setIsOpen(null)
    }
  }

  return (
    <>
      <div
        data-testid="region_filter_button"
        className={styles.filter_button_container}
      >
        <button onClick={() => HandleClick('region')}>Regions</button>
      </div>

      <div
        data-testid="type_filter_button"
        className={styles.filter_button_container}
      >
        <button onClick={() => HandleClick('type')}>Types</button>
      </div>

      <div
        data-testid="shape_filter_button"
        className={styles.filter_button_container}
      >
        <button onClick={() => HandleClick('shape')}>Shapes</button>
      </div>
    </>
  )
}

export default FilterSectionsComponent
