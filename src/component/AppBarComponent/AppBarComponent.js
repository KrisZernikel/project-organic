import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const logo = 'Citizen Produce'

const drawerWidth = 240

export function AppBarComponent ({ window, children }) {
  const theme = useTheme()
  const only = useMediaQuery(theme.breakpoints.only('lg'))
  const up = useMediaQuery(theme.breakpoints.up('lg'))
  const down = useMediaQuery(theme.breakpoints.down('lg'))
  const [mobileOpen, setMobileOpen] = React.useState(only)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  React.useEffect(() => {
    if (up && !mobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }, [up])

  React.useEffect(() => {
    if (down && mobileOpen) {
      setMobileOpen(!mobileOpen)
    }
  }, [down])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleDrawerToggle}
            color='inherit'
            edge='start'
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='p'
            noWrap
            component='div'
            sx={{
              paddingLeft: '20px',
              fontWeight: 'bold'
            }}
          >
            {logo}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: (mobileOpen && drawerWidth) || 0, flexShrink: 0 }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          hideBackdrop
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, width: { lg: (!mobileOpen && '100%') || `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default AppBarComponent
