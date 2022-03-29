import Link from 'next/link'
import { useState } from 'react'
import Loader from '../Loader'
import styles from './styles.module.scss'
import { PokemonCardProps } from './Types'

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div data-testid="Pokemon-card" className={styles.card}>
      <Link href={`/pokemon/${props.name}`}>
        <a>
          <div className={styles.image}>
            {isLoading && <Loader />}

            <img
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              src={props.img}
              alt={props.alt}
            />
          </div>

          {props.name ? <h3>{props.name}</h3> : undefined}
        </a>
      </Link>
    </div>
  )
}

export default PokemonCard
