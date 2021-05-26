export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const ADD_FETCH_DATA = 'ADD_FETCH_DATA'
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'

export const SET_FAVORITES = 'SET_FAVORITES'
export const ADD_FAVORITES = 'ADD_FAVORITES'
export const DELETE_FAVORITES = 'DELETE_FAVORITES'



export const changeInputValue = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value
  }
}

export const setData = (data) => {
  return {
    type: ADD_FETCH_DATA,
    payload: data
  }
}

export const setTotalPage = (pages) => {
  return {
    type: SET_TOTAL_PAGES,
    payload: pages
  }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}

export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE,
    payload: true
  }
}

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE,
    payload: false
  }
}

export const setFavorites = (data) => {
  return {
    type: SET_FAVORITES,
    payload: data
  }
}

export const addFavorites = (item) => {
  return {
    type: ADD_FAVORITES,
    payload: item
  }
}

export const deleteFavorites = (fullName) => {
  return {
    type: DELETE_FAVORITES,
    payload: fullName
  }
}