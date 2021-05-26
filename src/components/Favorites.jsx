import MyTable from './Table'


const Favorites = ({data}) => {
  return (
    <div>
      <h2>Favorites</h2>
      <MyTable data={data} favorites/>
    </div>
  )
}

export default Favorites