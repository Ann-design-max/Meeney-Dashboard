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
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function SinglePage(props) {
  return (
    <Paper elevation={0} sx={{bgcolor: 'background.default', px:1, width:'100%'}}>
    <Stack direction="row" spacing={2} justifyContent='space-around' alignItems='center'>
      <Stack direction="row" spacing={1} justifyContent='space-around' alignItems='center'>
        <ProfilePic src={single} sx={{ width: 35, height: 35, mt:1}}/>
        <Stack spacing={0} justifyContent='center' alignItems='flex-start'>
          <Typography component="div" variant="subtitle1" color='primary' >{props.primary}</Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">{props.secondary}</Typography>
        </Stack>
      </Stack>

      <Stack direction="column"  justifyContent="space-around" alignItems="center">
        <IconButton size='small' edge="end" aria-label="delete" color='primary'><MoreHorizIcon /></IconButton>
        <IconButton size='small' edge="end" aria-label="delete" color='primary'><PushPinIcon/></IconButton>
      </Stack>
    </Stack>
    </Paper>
  );
}
