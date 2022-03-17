import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetAllPokemons } from '../../service'
import styles from './SearchBar.module.scss'
import { searchDataProsp } from './SearchBarTypes'

const SearchBar = () => {
  const [dataList, setDataList] = useState<searchDataProsp[]>()
  const [value, setValue] = useState('')

  const router = useRouter()

  const handleDataList = async () => {
    const response = (await GetAllPokemons).data

    const result: searchDataProsp[] = response['results']

    setDataList(result)
  }

  useEffect(() => {
    handleDataList()
  }, [])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        router.push(`/pokemon/${value}`)
      }}
      className={styles.form}
    >
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles.input}
        placeholder="Search..."
        list="searchDataList"
        type="search"
      />
      <datalist id="searchDataList">
        {dataList &&
          dataList.map((item, index) => {
            return <option key={index} value={item.name} />
          })}
      </datalist>
    </form>
  )
}

export default SearchBar
