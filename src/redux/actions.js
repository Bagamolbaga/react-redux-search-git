export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const ADD_FETCH_DATA = 'ADD_FETCH_DATA'
export const IS_LOADING_TRUE = 'IS_LOADING_TRUE'
export const IS_LOADING_FALSE = 'IS_LOADING_FALSE'



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