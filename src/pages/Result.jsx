import {useContext, useEffect} from 'react'
import {Context} from '../context'
import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {getDataOnBtn} from '../redux/getAsyncData'
import {changeInputValue} from '../redux/actions'

import Search from '../components/Search'
import MyTable from '../components/Table'
import Favorites from '../components/Favorites'

const Result = () => {
  let {getDataFromGitHubOnBtnPage, pages,  useQuery} = useContext(Context)
  let {data, inputValue, currentPage, isLoading, favorites} = useSelector(state => state)
  let dispatch = useDispatch()
  
  let query = useQuery();

  useEffect(()=>{
    let q = query.get('q')
    let page = +query.get('page')
console.log(q, page)
    dispatch(changeInputValue(q))
    dispatch(getDataOnBtn(q, page))

    //if(page)
  },[])

  let routeTo = `/result?q=${inputValue}&page=${currentPage}`


  return (
    <>
        <Search />
        
        {isLoading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : <MyTable data={data}/>}
        
        {!isLoading & data.length !== 0 ? pages.map((page, i) => (<Link to={`/result?q=${inputValue}&page=${page}`}><button className={currentPage === page ? 'btn-page_current' : 'btn-page'} onClick={() => getDataFromGitHubOnBtnPage(inputValue, page)} key={i}>{page}</button></Link>)): ''}
    
        <Favorites data={favorites}/>
    </>
  )
}

export default Result;