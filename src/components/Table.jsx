import {useContext} from 'react'
import {Context} from '../context'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

const MyTable = ({data, favorites}) => {
  let {addFavoriteHandler, deleteFavoriteHandler} = useContext(Context)

  let Fav = () => {
    return(
      <TableContainer component={Paper}>
          <Table  size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Full name repo</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Stars</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!!data && data.map((row) => (
                <TableRow key={row.fullName}>
                  <TableCell component="th" scope="row">
                    {row.fullName}
                  </TableCell>
                  <TableCell align="center">{row.author}</TableCell>
                  <TableCell align="center">{row.stars}</TableCell>
                  <TableCell align="center"><a href={row.link}>{row.link}</a></TableCell>
                  <TableCell align="center"><Button size='small' variant="contained" color="secondary" onClick={()=>deleteFavoriteHandler(row.fullName)}>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
    )
  }

  let NotFav = () => {
    return(
      <TableContainer component={Paper}>
          <Table  size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Full name repo</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Stars</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!!data && data.map((row) => (
                <TableRow key={row.fullName}>
                  <TableCell component="th" scope="row">
                    {row.fullName}
                  </TableCell>
                  <TableCell align="center">{row.author}</TableCell>
                  <TableCell align="center">{row.stars}</TableCell>
                  <TableCell align="center"><a href={row.link}>{row.link}</a></TableCell>
                  <TableCell align="center"><Button size='small' variant="contained" color="primary" onClick={()=>addFavoriteHandler(row)}>Add to fovorite</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
    )
  }

  if(favorites){
    return <Fav />
  } else {
    return <NotFav />
  }
}

export default MyTable