import Link from 'next/link'
import styles from './PokemonCard.module.scss'
import { PokemonCardProps } from './PokemonCardTypes'

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  return (
    <div data-testid="Pokemon-card" className={styles.card}>
      <Link href={`/pokemon/${props.name}`}>
        <a>
          <img
            loading="lazy"
            onLoad={() => props.onLoading()}
            src={props.img}
            alt={props.alt}
          />

          {props.name ? <h3>{props.name}</h3> : undefined}
        </a>
      </Link>
    </div>
  )
}

export default PokemonCard
