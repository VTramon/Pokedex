type PokemonCardProps = {
  img: string
  alt: string
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.alt} />

      <h3>{props.name}</h3>
    </div>
  )
}

export default PokemonCard
