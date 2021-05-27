import {useContext, useEffect} from 'react'
import {Context} from '../context'
import {Link, useHistory} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {getDataOnBtn} from '../redux/getAsyncData'
import {changeInputValue} from '../redux/actions'

import Search from '../components/Search'
import MyTable from '../components/Table'
import Favorites from '../components/Favorites'

const Result = () => {
  let {getDataFromGitHubOnBtnPage, pages,  useQuery} = useContext(Context)
  let {data, inputValue, currentPage, pagesCount, isLoading, favorites} = useSelector(state => state)
  let dispatch = useDispatch()
  let history = useHistory()
  
  let query = useQuery();

  useEffect(()=>{
    let q = query.get('q')
    let page = +query.get('page')
    if(page < 1){
      page = 1
      history.push(`/result?q=${q}&page=1`)
    } 
    dispatch(changeInputValue(q))
    dispatch(getDataOnBtn(q, page))
  },[])



  return (
    <>
        <Search />
        
        {isLoading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : <MyTable data={data}/>}
        
        {!isLoading & data.length !== 0 ? pages.map((page) => (<Link key={page} to={`/result?q=${inputValue}&page=${page}`}><button className={currentPage === page ? 'btn-page_current' : 'btn-page'} onClick={() => getDataFromGitHubOnBtnPage(inputValue, page)}>{page}</button></Link>)): ''}
    
        <Favorites data={favorites}/>
    </>
  )
}

export default Result;