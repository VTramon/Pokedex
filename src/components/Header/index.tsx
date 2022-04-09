import Link from 'next/link'
import ThemeButton from '../ThemeButton'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header data-testid="header" className={styles.header}>
      <Link href={'/'}>
        <a>
          <img src="/logo.png" alt="logo do site" />
          <h1>Pokedex</h1>
        </a>
      </Link>
      <ThemeButton />
    </header>
  )
}

export default Header
