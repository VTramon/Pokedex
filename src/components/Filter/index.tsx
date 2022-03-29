import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../Redux/app/hooks'
import { unset } from '../../Redux/features/filter/filterSlice'
import FilterRegionComponent from '../FilterParametersComponent'
import FilterSectionsComponent from '../FilterSectionsComponent'
import styles from './styles.module.scss'
import { FilterParametersProps } from './Types'

const Filter = () => {
  const dispatch = useDispatch()

  const [whichParameterIsOpen, setWhichParameterIsOpen] =
    useState<FilterParametersProps>(null)

  const parameter = useAppSelector((state) => state.filter)

  const [parametersThatAreNotUndefined, setParametersThatAreNotUndefined] =
    useState(Object.values(parameter).filter((item) => item !== undefined))

  const handleParametersThatAreNotUndefined = () => {
    setParametersThatAreNotUndefined(
      Object.values(parameter).filter((item) => item !== undefined)
    )
  }

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

  useEffect(() => {
    handleParametersThatAreNotUndefined()
  }, [parameter])

  return (
    <section className={styles.filter}>
      <nav>
        <FilterSectionsComponent setIsOpen={HandleWhichParameterIsOpen} />
      </nav>
      {RenderTheParameters(whichParameterIsOpen)}
      {parametersThatAreNotUndefined.length !== 0 && (
        <button
          data-testid="reset_button"
          className={styles.reset_button}
          onClick={() => dispatch(unset())}
        >
          <span>Reset</span>
        </button>
      )}
    </section>
  )
}

export default Filter
