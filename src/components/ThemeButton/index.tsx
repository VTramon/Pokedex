import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/app/hooks'
import { toDark, toLight } from '../../Redux/features/theme/themeSlice'
import { DarkIcon, LightIcon } from '../Icons'
import styles from './styles.module.scss'

const ThemeButton = () => {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      dispatch(toDark())
    } else {
      dispatch(toLight())
    }
  }, [])

  return (
    <>
      {theme === 'dark' ? (
        <button
          name="light"
          className={styles.button}
          onClick={() => dispatch(toLight())}
        >
          <LightIcon />
        </button>
      ) : (
        <button
          name="dark"
          className={styles.button}
          onClick={() => dispatch(toDark())}
        >
          <DarkIcon />
        </button>
      )}
    </>
  )
}

export default ThemeButton
