import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ProfilePic from '../../avatar';
import single from '../../../assests/single.png'
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PushPinIcon from '@mui/icons-material/PushPin';
import Stack from '@mui/material/Stack';

export default function SinglePage(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.default' }}>
      <ListItem secondaryAction={
                    <Stack direction="column" justifyContent="space-around" alignItems="center">
                         <IconButton size='small' edge="end" aria-label="delete">
                      <MoreHorizIcon />
                    </IconButton>
                    <IconButton size='small' edge="end" aria-label="delete">
                    <PushPinIcon/>
                  </IconButton>
                    </Stack>
                   
                  }>
        <ListItemAvatar>
         <ProfilePic src={single} sx={{ width: 40, height: 40}} />
        </ListItemAvatar>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </ListItem>
    </List>
  );
}
