import API from '../axios.api'
import {setData} from './actions'

export const getData = (query) => {
  return async (dispatch) => {
    let res = await API.get(`/search/repositories?q=${query}&per_page=10`)
    dispatch(setData(res.data))
  }
}