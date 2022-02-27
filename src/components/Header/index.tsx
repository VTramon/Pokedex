import ThemeButton from '../ThemeButton'
import styles from './style.module.scss'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo.png" alt="logo do site" />
        <h1>Pokedex</h1>
      </div>
      <ThemeButton />
    </header>
  )
}

export default Header
