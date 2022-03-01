import styles from './PokemonCard.module.scss'

type PokemonCardProps = {
  img: string
  alt: string
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  return (
    <div data-testid="pokemon-card" className={styles.card}>
      <a href="#_blank">
        <img src={props.img} alt={props.alt} />

        <h3>{props.name}</h3>
      </a>
    </div>
  )
}

export default PokemonCard
