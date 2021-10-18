import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ProfilePic from '../avatar';
import single from '../../assests/single.png'
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PushPinIcon from '@mui/icons-material/PushPin';
import Stack from '@mui/material/Stack';
import profile from '../../assests/postprofile.png'
import Typography from '@mui/material/Typography';
import RoundButton from './../button';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ProgressBar from './../progress bar';
import LinearProgress  from '@mui/material/LinearProgress';


export default function ListingsItem(props) {
  return (
    <Stack direction="row" spacing={9} justifyContent='space-between' alignItems='flex-start'>
      <Stack direction="row" spacing={2} justifyContent='flex-start' alignItems='flex-start'>
          <ProfilePic src={profile} sx={{ width: 35, height: 35, mt:1}}/>
          <Stack spacing={0} justifyContent='center' alignItems='flex-start'>
          <Typography component="div" variant="h6">Smoothie </Typography>
          <Typography component="div" variant="body2">Smoothy store </Typography>
          <Typography variant="caption" color="text.secondary" component="div">25 Orders Left</Typography>
          <LinearProgress variant='determinate'color='secondary' value={30}/>
          <ProgressBar/>
          </Stack>
      </Stack>
        <RoundButton size='small' fullWidth label="order"/>
    </Stack>
  );
}
