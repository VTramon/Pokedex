import styles from './FilterParametersComponent.module.scss'
import { useDispatch } from 'react-redux'
import {
  Regions,
  Shapes,
  toRegion,
  toShape,
  toType,
  Types,
} from '../../Redux/features/filter/filterSlice'
import { FilterParametersProps } from '../Filter'

const RegionParameter: Regions[] = [
  'Kanto',
  'Johto',
  'Hoenn',
  'Sinnoh',
  'Unova',
]
const TypeParameter: Types[] = [
  'ball',
  'squiggle',
  'fish',
  'arms',
  'blob',
  'upright',
  'legs',
  'quadruped',
  'wings',
  'tentacles',
  'heads',
  'humanoid',
  'bug-wings',
  'armor',
]
const ShapeParameter: Shapes[] = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
  'shadow',
]

type teste = {
  value: 'region' | 'type' | 'shape'
}

type ParametersProps = {
  value: null | 'region' | 'type' | 'shape'
}

const ParametersComponent: React.FC<teste> = (props) => {
  const dispatch = useDispatch()

  return (
    <>
      {props.value === 'region'
        ? RegionParameter.map((item, index) => {
            return (
              <span>
                <button onClick={() => dispatch(toRegion(item))} value={item}>
                  {item}
                </button>
              </span>
            )
          })
        : props.value === 'type'
        ? TypeParameter.map((item, index) => {
            return (
              <span>
                <button onClick={() => dispatch(toType(item))} value={item}>
                  {item}
                </button>
              </span>
            )
          })
        : props.value === 'shape'
        ? ShapeParameter.map((item, index) => {
            return (
              <span>
                <button onClick={() => dispatch(toShape(item))} value={item}>
                  {item}
                </button>
              </span>
            )
          })
        : null}
    </>
  )
}

const FilterParametersComponent = (props: ParametersProps) => {
  const HandleWhichParametersWillBeRendered = (
    value: FilterParametersProps
  ) => {
    // console.log()
    switch (value) {
      case 'region': {
        return <ParametersComponent value="region" />
      }
      case 'shape': {
        return <ParametersComponent value="shape" />
      }
      case 'type': {
        return <ParametersComponent value="type" />
      }

      default:
        break
    }
  }
  return (
    <div className={styles.filter_parameter_list}>
      {HandleWhichParametersWillBeRendered(props.value)}
    </div>
  )
}

export default FilterParametersComponent
