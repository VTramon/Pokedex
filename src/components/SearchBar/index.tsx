import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { pokemonRequests } from '../../service'
import styles from './SearchBar.module.scss'
import { searchDataProps } from './SearchBarTypes'

const SearchBar = () => {
  const [dataList, setDataList] = useState<searchDataProps[]>()
  const [value, setValue] = useState('')

  const router = useRouter()

  const handleDataList = async () => {
    const response = (await pokemonRequests.GetAllPokemons).data

    const result: searchDataProps[] = response['results']

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
        data-testid="search_input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles.input}
        placeholder="Search..."
        list="searchDataList"
        type="search"
      />
      <datalist data-testid="search_datalist" id="searchDataList">
        {dataList &&
          dataList.map((item, index) => {
            return (
              <option
                data-testid="search_datalist_options"
                key={index}
                value={item.name}
              />
            )
          })}
      </datalist>
    </form>
  )
}

export default SearchBar
