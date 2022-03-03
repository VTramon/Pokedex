import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  toHoenn,
  toJohto,
  toKanto,
  toSinnoh,
  toUnova,
} from '../../Redux/features/filter/filterSlice'

type FilterProps = {
  region?: 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unova'
}

const Filter: React.FC<FilterProps> = () => {
  const dispatch = useDispatch()

  const handleRegionFilter = (region: string) => {}
  return (
    <section>
      <ul>
        <li>
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
        </li>
      </ul>
    </section>
  )
}

export default Filter
