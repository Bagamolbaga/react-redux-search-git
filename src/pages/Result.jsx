import {useContext} from 'react'
import {Context} from '../context'

import {useSelector} from 'react-redux'

import Search from '../components/Search'
import MyTable from '../components/Table'
import Favorites from '../components/Favorites'

const Result = () => {
  let {getDataFromGitHubOnBtnPage, favorites, pages} = useContext(Context)
  let {data, inputValue, currentPage, isLoading} = useSelector(state => state)
  


  return (
    <>
        <Search />
        
        {isLoading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : <MyTable data={data}/>}
        
        {!isLoading & data.length !== 0 ? pages.map((page, i) => (<button className={currentPage === page ? 'btn-page_current' : 'btn-page'} onClick={() => getDataFromGitHubOnBtnPage(inputValue, page)} key={i}>{page}</button>)): ''}
    
        <Favorites data={favorites}/>
    </>
  )
}

export default Result;