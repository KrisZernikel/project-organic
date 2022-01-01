import Box from '@mui/material/Box'

export function AppBarShellComponent ({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {children}
    </Box>
  )
}

export default AppBarShellComponent
