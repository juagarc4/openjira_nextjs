import { Drawer, List, ListItemIcon, ListItemText, Typography, ListItemButton, Divider } from '@mui/material'
import { Box } from '@mui/system'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer anchor='left' open={true} onClose={() => console.log('Cerrando')}>
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
