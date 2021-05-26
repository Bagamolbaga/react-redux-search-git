import {CHANGE_INPUT_VALUE, ADD_FETCH_DATA} from './actions'

let initialState = {
  inputValue: '',
  data: []
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
        data: action.payload.items
      }
  
    default:
      return state
  }
}