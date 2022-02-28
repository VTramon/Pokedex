import { useAppDispatch, useAppSelector } from '../../Redux/app/hooks'
import { toDark, toLight } from '../../Redux/features/theme/themeSlice'
import { DarkIcon, LightIcon } from '../Icons'
import styles from './style.module.scss'

const ThemeButton = () => {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  return (
    <>
      {theme === 'dark' ? (
        <button className={styles.button} onClick={() => dispatch(toLight())}>
          <LightIcon />
        </button>
      ) : (
        <button className={styles.button} onClick={() => dispatch(toDark())}>
          <DarkIcon />
        </button>
      )}
    </>
  )
}

export default ThemeButton
