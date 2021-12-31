import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

function createHeaders (row) {
  return Object.keys(row).map(
    (key, index) => {
      if (index === 0) {
        return <TableCell key={index}>{key}</TableCell>
      }

      return <TableCell align='right' key={index}>{key}</TableCell>
    }
  )
}

function createRows (rows) {
  return rows.map((row, rowIndex) => {
    return (
      <TableRow key={rowIndex}>
        {
            Object.entries(row).map(
              ([key, value], columnIndex) => {
                if (columnIndex === 0) {
                  return (
                    <TableCell component='th' scope='row' key={`${key}-${rowIndex}`}>
                      {value}
                    </TableCell>
                  )
                }

                return <TableCell align='right' key={`${key}-${rowIndex}`}>{value}</TableCell>
              }
            )
        }
      </TableRow>
    )
  })
}

export function TableDataComponent ({ rows, bg }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label='caption table'>
        <TableHead>
          <TableRow>
            {createHeaders(rows[0])}
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows(rows)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDataComponent
