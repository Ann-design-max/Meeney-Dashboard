// import * as React from 'react';
// import { Paper, Typography } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import { styled } from '@mui/material/styles';

// export default function NavMenu() {
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };
//   const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
//     color: theme.palette.background.paper,

//     backgroundColor: theme.palette.primary.main,
//     '&:hover': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.secondary.main
//     },
//     '&:active': {
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.secondary.main
//     },
//   })); 
//   return (
//       <div>
//           <Paper elevation={0} sx={{ bgcolor: 'primary.main' }}>
//              <Stack spacing={1} justifyContent='center' alignItems='center'py={2} my={2}>
//              <List component="nav" aria-label="main mailbox folders">
//         <StyledListItemButton
//           selected={selectedIndex === 0}
//           onClick={(event) => handleListItemClick(event, 0)}
//         >
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </StyledListItemButton>
//         <StyledListItemButton
//          color="secondary"
//           selected={selectedIndex === 1}
//           onClick={(event) => handleListItemClick(event, 1)}
//         >
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </StyledListItemButton>
//       </List>
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folder">
//         <StyledListItemButton
//           selected={selectedIndex === 2}
//           onClick={(event) => handleListItemClick(event, 2)}
//         >
//           <ListItemText primary="Trash" />
//         </StyledListItemButton>
//         <StyledListItemButton
//           selected={selectedIndex === 3}
//           onClick={(event) => handleListItemClick(event, 3)}
//         >
//           <ListItemText primary="Spam" />
//         </StyledListItemButton>
//       </List>
//             </Stack>
//           </Paper>
//       </div>
    
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Paper, Typography } from '@mui/material';

export default function NavMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Paper elevation={0} sx={{ bgcolor: 'primary.main' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
