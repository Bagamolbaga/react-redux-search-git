import {useContext} from 'react'
import {Context} from '../context'

import Search from '../components/Search'
import MyTable from '../components/Table'
import Favorites from '../components/Favorites'

const Result = () => {
  let {data, favorites, isLoading, pages, btnPageHandler, currentPage} = useContext(Context)
  

  return (
    <>
        <Search />
        
        {isLoading ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : <MyTable data={data}/>}
        
        {!isLoading & data.length !== 0 ? pages.map((page, i) => (<button className={currentPage === page ? 'btn-page_current' : 'btn-page'} onClick={() => btnPageHandler(page)} key={i}>{page}</button>)): ''}
    
        <Favorites data={favorites}/>
    </>
  )
}

export default Result;