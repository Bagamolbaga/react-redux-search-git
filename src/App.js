import {useEffect} from 'react'
import {Context} from './context'
//REDUX
import {useSelector, useDispatch} from 'react-redux'
import {getData, getDataOnBtn, getDataFromLocalStorage} from './redux/getAsyncData'
//REDUX

import Home from './pages/Home';
import Result from './pages/Result'

import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom'

import "./styles.css";

export default function App() {
  let dispatch = useDispatch()
  let {pagesCount, currentPage} = useSelector(state => state)

  useEffect(()=>{
    dispatch(getDataFromLocalStorage())
  },[])

  let getDataFromGitHub = (query) => {
    dispatch(getData(query))
  }

  let getDataFromGitHubOnBtnPage = (query, page) => {
    dispatch(getDataOnBtn(query, page))
  }

  
  let pages = []
  pagesCount = Math.ceil(pagesCount / 10)

  let createPages = (pages, totalPages, currentPage) => {
    if(totalPages > 10){
      if(currentPage > 5){
        for(let i = currentPage - 4; i<= currentPage + 5; i++){
          pages.push(i)
          if(i === totalPages) break
        }
      } else {
        for(let i = 1; i <= 10; i++){
          pages.push(i)
          if(i === totalPages) break
        }
      }
    } else {
      for(let i = 1; i <= totalPages; i++){
        pages.push(i)
      }
    }
  }

  createPages(pages, pagesCount, currentPage)

  let useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

 
  

  return (
    <Context.Provider
      value={{
        pages,
        useQuery,
        getDataFromGitHub,
        getDataFromGitHubOnBtnPage
      }}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/result" component={Result} />
            </Switch>
          </BrowserRouter>
        </div>
    </Context.Provider>
  );
}
