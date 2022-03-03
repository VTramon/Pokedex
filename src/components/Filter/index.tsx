import { useState } from 'react'
import RegionFilterComponent from '../FilterRegionComponent'
import styles from './Filter.module.scss'
import FilterSectionsComponent from '../FilterSectionsComponent'
import FilterRegionComponent from '../FilterRegionComponent'

type RegionProps = 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'

type FilterParametersProps = null | 'region' | 'type' | 'shape'

const Filter = () => {
  const [whichParameterIsOpen, setWhichParameterIsOpen] =
    useState<FilterParametersProps>(null)

  const HandleWhichParameterIsOpen = (parameter: FilterParametersProps) => {
    // console.log('teste')

    switch (parameter) {
      case null: {
        setWhichParameterIsOpen(null)
        break
      }
      case 'region': {
        setWhichParameterIsOpen('region')
        break
      }
    }
  }

  const RenderTheParameters = (param: FilterParametersProps) => {
    switch (param) {
      case 'region': {
        return <FilterRegionComponent />
      }
      default:
        break
    }
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
