import MyTable from './Table'


const Favorites = ({data}) => {
  return (
    <div>
      <h2 className='favorite-tittle'>Favorites</h2>
      {data.length !== 0 ? <MyTable data={data} favorites/> : <p>У вас нет избранных</p>}
    </div>
  )
}

export default Favorites