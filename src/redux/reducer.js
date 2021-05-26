import {
  CHANGE_INPUT_VALUE, 
  ADD_FETCH_DATA, 
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_FAVORITES,
  ADD_FAVORITES,
  DELETE_FAVORITES
} from './actions'

let initialState = {
  inputValue: '',
  data: [],
  pagesCount: 1,
  currentPage: 1,
  isLoading: false,
  favorites: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return{
        ...state,
        inputValue: action.payload
      }

    case ADD_FETCH_DATA:
      return{
        ...state,
        data: action.payload
      }

    case SET_TOTAL_PAGES:
      return{
        ...state,
        pagesCount: action.payload
      }

    case SET_CURRENT_PAGE:
      return{
        ...state,
        currentPage: action.payload
      }

    case SET_LOADING_TRUE:
      return{
        ...state,
        isLoading: action.payload
      }

    case SET_LOADING_FALSE:
      return{
        ...state,
        isLoading: action.payload
      }

    case SET_FAVORITES:
      let fav = state.favorites
      return{
        ...state,
        favorites: fav.concat(action.payload)
      }

    case ADD_FAVORITES:
      let favorit = state.favorites
      favorit = [...favorit, ...[action.payload]]
      localStorage.setItem('repo', JSON.stringify(favorit))
      return{
        ...state,
        favorites: favorit
      }

    case DELETE_FAVORITES:
      let newFav = state.favorites.filter(item => item.fullName !== action.payload)
      localStorage.setItem('repo', JSON.stringify(newFav))
      return{
        ...state,
        favorites: newFav
      }
  
    default:
      return state
  }
}