import { useContext } from 'react'
import { Drawer, List, ListItemIcon, ListItemText, Typography, ListItemButton, Divider } from '@mui/material'
import { Box } from '@mui/system'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import { UIContext } from 'context/ui/'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer anchor='left' open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: '250px' }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItemButton key={menuItem}>
              <ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={menuItem} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItemButton key={menuItem}>
              <ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={menuItem} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
