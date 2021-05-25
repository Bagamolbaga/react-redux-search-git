import {useContext} from 'react'
import {Context} from '../context'
import {Link} from 'react-router-dom'

import {TextField, Button} from '@material-ui/core'


const Search = () => {
  let {inputVal, inputHandler, searchBtnHandler} = useContext(Context)

  let routeTo = `/result/${inputVal}`

  return (
    <div className='search-container'>
      <TextField onChange={e => inputHandler(e)} value={inputVal} fullWidth id="standard-basic" label="Name repo" />
      <Button disabled={!inputVal} onClick={searchBtnHandler} variant="contained" color="primary">
        <Link to={routeTo} className='search'>Search</Link>
      </Button>
    </div>
  )
}

export default Search