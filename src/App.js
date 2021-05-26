import {useState, useEffect} from 'react'
import {Context} from './context'
import API from './axios.api'
//REDUX
import {useSelector, useDispatch} from 'react-redux'
import {getData, getDataOnBtn, getDataFromLocalStorage} from './redux/getAsyncData'
//REDUX

import Home from './pages/Home';
import Result from './pages/Result'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import "./styles.css";

export default function App() {
  let dispatch = useDispatch()
  let {pagesCount, currentPage} = useSelector(state => state)

  let getDataFromGitHub = (query) => {
    dispatch(getData(query))
  }

  let getDataFromGitHubOnBtnPage = (query, page) => {
    dispatch(getDataOnBtn(query, page))
  }



  let [favorites, setFavorites] = useState([])



  
  let pages = []
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

  useEffect(()=>{
    dispatch(getDataFromLocalStorage())
  },[])

  // useEffect(()=>{
  //   localStorage.setItem('repo', JSON.stringify(favorites))
  // },[favorites])

  

  

  let btnPageHandler = async (page) => {
    setIsLoading(true)
    setCurrentPage(page)
    let res = await API.get(`/search/repositories?q=${inputVal}&per_page=${perPage}&page=${page}`)
    let resDestr = res.data.items
    let obj = resDestr.map(item => {
      return {
        fullName: item.full_name,
        author: item.owner.login,
        stars: item.stargazers_count,
        link: item.html_url
      }
    })
    setData(obj)
    setIsLoading(false)
  }
  
  


  let addFavoriteHandler = (row) => {
    setFavorites([...favorites, row])
  }

  let deleteFavoriteHandler = (fullName) => {
    setFavorites(favorites.filter(item => item.fullName !== fullName))
  }

  

  return (
    <Context.Provider
      value={{
        
        pages,
        btnPageHandler,
        currentPage,
        addFavoriteHandler,
        deleteFavoriteHandler,
        favorites,


        getDataFromGitHub,
        getDataFromGitHubOnBtnPage
      }}
    >
      
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/result/:q" component={Result} />
            </Switch>
          </BrowserRouter>
        </div>
    </Context.Provider>
  );
}
