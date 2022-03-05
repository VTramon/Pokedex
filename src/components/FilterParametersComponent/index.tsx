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
const ShapeParameter: Shapes[] = [
  'Ball',
  'Squiggle',
  'Fish',
  'Arms',
  'Blob',
  'Upright',
  'Legs',
  'Quadruped',
  'Wings',
  'Tentacles',
  'Heads',
  'Humanoid',
  'BugWings',
  'Armor',
]
const TypeParameter: Types[] = [
  'Normal',
  'Fighting',
  'Flying',
  'Poison',
  'Ground',
  'Rock',
  'Bug',
  'Ghost',
  'Steel',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Psychic',
  'Ice',
  'Dragon',
  'Dark',
  'Fairy',
  'Unknown',
  'Shadow',
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
              <span key={index + 'region_span'}>
                <button
                  key={index + 'region_button'}
                  onClick={() => dispatch(toRegion(item))}
                  value={item}
                >
                  {item}
                </button>
              </span>
            )
          })
        : props.value === 'type'
        ? TypeParameter.map((item, index) => {
            return (
              <span key={index + 'shape_span'}>
                <button
                  key={index + 'shape_button'}
                  onClick={() => dispatch(toType(item))}
                  value={item}
                >
                  {item}
                </button>
              </span>
            )
          })
        : props.value === 'shape'
        ? ShapeParameter.map((item, index) => {
            return (
              <span key={index + 'shape_span'}>
                <button
                  key={index + 'shape_button'}
                  onClick={() => dispatch(toShape(item))}
                  value={item}
                >
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
