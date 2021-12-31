import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

export function TableShellComponent (props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {props.children}
      </Paper>
    </Box>
  )
}

export default TableShellComponent
