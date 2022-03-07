import Link from 'next/link'
import styles from './PokemonCard.module.scss'

type PokemonCardProps = {
  img: string
  alt: string
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  return (
    <div data-testid="pokemon-card" className={styles.card}>
      <Link href={`/pokemon/${props.name}`}>
        <a>
          <img src={props.img} alt={props.alt} />

          <h3>{props.name}</h3>
        </a>
      </Link>
    </div>
  )
}

export default PokemonCard
