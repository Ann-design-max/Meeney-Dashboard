// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import MuiListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import RssFeedIcon from '@mui/icons-material/RssFeed';
// import DraftsIcon from "@material-ui/icons/Drafts";
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     borderRadius:5,
//     paddingLeft:10,
//     backgroundColor: '#490057'
//   }
// }));

// const ListItem = withStyles({
//   root: {
//     color:'white',
//     "& .MuiListItemIcon-root": {
//       color: "white"
//     },
//     "&$selected": {
//       backgroundColor: "#490057",
//       color: "#FBB03B",
//       "& .MuiListItemIcon-root": {
//         color: "#FBB03B"
//       }
//     },
//     "&$selected:hover": {
//       backgroundColor: "#490057",
//       color: "#FBB03B",
//       "& .MuiListItemIcon-root": {
//         color: "#FBB03B"
//       }
//     },
//     "&:hover": {
//       backgroundColor: "#490057",
//       color: "#FBB03B",
//       "& .MuiListItemIcon-root": {
//         color: "#FBB03B"
//       }
//     }
//   },
//   selected: {}
// })(MuiListItem);

// export default function NavMenu() {
//   const classes = useStyles();
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItem
//           button
//           selected={selectedIndex === 1}
//           onClick={(event) => handleListItemClick(event, 1)}
//         >
//           <ListItemIcon>
//             <RssFeedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Feeds" />
//         </ListItem>
//         <ListItem
//           button
//           selected={selectedIndex === 0}
//           onClick={(event) => handleListItemClick(event, 0)}
//         >
//           <ListItemIcon>
//             <InsertPhotoIcon />
//           </ListItemIcon>
//           <ListItemText primary="Gallery" />
//         </ListItem>
      
//         <ListItem
//           button
//           selected={selectedIndex === 2}
//           onClick={(event) => handleListItemClick(event, 2)}
//         >
//           <ListItemIcon>
//             <SettingsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Settings" />
//         </ListItem>
//         <ListItem
//           button
//           selected={selectedIndex === 3}
//           onClick={(event) => handleListItemClick(event, 3)}
//         >
//           <ListItemIcon>
//             <GroupAddIcon />
//           </ListItemIcon>
//           <ListItemText primary="Referral" />
//         </ListItem>
//         <ListItem
//           button
//           selected={selectedIndex === 4}
//           onClick={(event) => handleListItemClick(event, 4)}
//         >
//           <ListItemIcon>
//             <BookmarkIcon/>
//           </ListItemIcon>
//           <ListItemText primary="Saved" />
//         </ListItem>
//       </List>
//     </div>
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      borderRadius:5,
      paddingLeft:10,
      backgroundColor: '#490057'
    }
  }));
const StyledListItemButton = withStyles({
    root: {
      color:'white',
      "& .MuiListItemIcon-root": {
        color: "white"
      },
      "&$selected": {
        backgroundColor: "#490057",
        color: "#FBB03B",
        "& .MuiListItemIcon-root": {
          color: "#FBB03B"
        }
      },
      "&$selected:hover": {
        backgroundColor: "#490057",
        color: "#FBB03B",
        "& .MuiListItemIcon-root": {
          color: "#FBB03B"
        }
      },
      "&:hover": {
        backgroundColor: "#490057",
        color: "#FBB03B",
        "& .MuiListItemIcon-root": {
          color: "#FBB03B"
        }
      }
    },
    selected: {}
  })(ListItemButton);

export default function NavMenu() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <StyledListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
             <RssFeedIcon />
           </ListItemIcon>
           <ListItemText primary="Feeds" />
        </StyledListItemButton>
        <StyledListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
             <InsertPhotoIcon />
           </ListItemIcon>
           <ListItemText primary="Gallery" />
        </StyledListItemButton>

        <StyledListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledListItemButton>
        <StyledListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
           <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Referral" />
        </StyledListItemButton>
        <StyledListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
           <ListItemIcon>
            <BookmarkIcon/>
          </ListItemIcon>
          <ListItemText primary="Saved" />
        </StyledListItemButton>
      </List>
    </Box>
  );
}
