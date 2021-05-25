import Search from '../components/Search'
import {Context} from '../context'
import {useContext} from 'react'

const Home = () => {
  let {data} = useContext(Context)

  return (
    <>
      <Search />
      {data.length === 0 && <p>Введите имя репозитория</p>}
    </>
    )
}

export default Home;