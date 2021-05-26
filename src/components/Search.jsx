import {useContext} from 'react'
import {Context} from '../context'
import {Link} from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'

import {useSelector, useDispatch} from 'react-redux'
import {changeInputValue} from '../redux/actions'


const Search = () => {
  let inputValue = useSelector(state => state.inputValue)
  let dispatch = useDispatch()

  let {getDataFromGitHub} = useContext(Context)

  let routeTo = `/result/${inputValue}`

  return (
    <div className='search-container'>
      <TextField onChange={e => dispatch(changeInputValue(e.target.value))} value={inputValue} fullWidth id="standard-basic" label="Name repo" />
      <Button disabled={!inputValue} onClick={() => getDataFromGitHub(inputValue)} variant="contained" color="primary">
        <Link to={routeTo} className='search'>Search</Link>
      </Button>
    </div>
  )
}

export default Search