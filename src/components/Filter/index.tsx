import { useState } from 'react'
import RegionFilterComponent from '../FilterParametersComponent'
import styles from './Filter.module.scss'
import FilterSectionsComponent from '../FilterSectionsComponent'
import FilterRegionComponent from '../FilterParametersComponent'

type RegionProps = 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'

export type FilterParametersProps = null | 'region' | 'type' | 'shape'

const Filter = () => {
  const [whichParameterIsOpen, setWhichParameterIsOpen] =
    useState<FilterParametersProps>(null)

  const HandleWhichParameterIsOpen = (parameter: FilterParametersProps) => {
    switch (parameter) {
      case null: {
        setWhichParameterIsOpen(null)
        break
      }
      case 'region': {
        setWhichParameterIsOpen('region')
        break
      }
      case 'shape': {
        setWhichParameterIsOpen('shape')
        break
      }
      case 'type': {
        setWhichParameterIsOpen('type')
        break
      }
    }
  }

  const RenderTheParameters = (param: FilterParametersProps) => {
    return <FilterRegionComponent value={whichParameterIsOpen} />
  }

  return (
    <section className={styles.filter}>
      <nav>
        <FilterSectionsComponent setIsOpen={HandleWhichParameterIsOpen} />
      </nav>
      {RenderTheParameters(whichParameterIsOpen)}
    </section>
  )
}

export default Filter
