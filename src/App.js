import {useState, useEffect} from 'react'
import {Context} from './context'
import API from './axios.api'

import Home from './pages/Home';
import Result from './pages/Result'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import "./styles.css";

export default function App() {

  let [data, setData] = useState([])

  let [favorites, setFavorites] = useState([])

  let [inputVal, setInputVal] = useState('')

  let [isLoading, setIsLoading] = useState(false)

  let [totalPages, setTotalPages] = useState(1)   //Всего страниц
  let [currentPage, setCurrentPage] = useState(1) //текущая страница
  let perPage = 10                                //елементов на странице
  let pages = []

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('repo')) !== null){
      setFavorites(JSON.parse(localStorage.getItem('repo')))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('repo', JSON.stringify(favorites))
  },[favorites])

  let searchBtnHandler = async () => {
    setIsLoading(true)
    let res = await API.get(`/search/repositories?q=${inputVal}&per_page=${perPage}`)
    let resDestr = res.data.items
    let obj = resDestr.map(item => {
      return {
        fullName: item.full_name,
        author: item.owner.login,
        stars: item.stargazers_count,
        link: item.html_url
      }
    })
    setTotalPages(Math.ceil(res.data.total_count / perPage))
    setData(obj)
    setIsLoading(false)
  }

  let inputHandler = (e) => {
    setInputVal(e.target.value)
  }

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

  createPages(pages, totalPages, currentPage)

  let addFavoriteHandler = (row) => {
    setFavorites([...favorites, row])
  }

  let deleteFavoriteHandler = (fullName) => {
    setFavorites(favorites.filter(item => item.fullName !== fullName))
  }

  return (
    <Context.Provider
      value={{
        data,
        setData,
        inputVal,
        isLoading,
        setInputVal,
        searchBtnHandler,
        inputHandler,
        pages,
        btnPageHandler,
        currentPage,
        setCurrentPage,
        addFavoriteHandler,
        deleteFavoriteHandler,
        favorites
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
