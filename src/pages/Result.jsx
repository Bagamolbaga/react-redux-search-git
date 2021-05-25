import {useContext} from 'react'
import {Context} from '../context'

import Search from '../components/Search'
import MyTable from '../components/Table'

const Result = () => {
  let {data, isLoading, pages, btnPageHandler, currentPage} = useContext(Context)
 
  return (
    <>
        <Search />
        
        {isLoading ? <p>Loading...</p> : <MyTable data={data}/>}
        {data.length !== 0 && pages.map((page, i) => (<button className={currentPage === page && 'current-page'} onClick={() => btnPageHandler(page)} key={i}>{page}</button>) )}
    </>
  )
}

export default Result;