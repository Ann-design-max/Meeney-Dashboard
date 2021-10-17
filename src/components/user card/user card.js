import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import user from '../../assests/user card.png'
import ProfilePic from '../avatar';
import { Paper, Stack} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardHeader from '@mui/material/CardHeader';
import Metric from './metric';
import RoundButton from './../button';

export default function UserCard(props) {

  return (
    <Paper elevation={0} py={3} sx={{bgcolor: 'primary.lighter',borderRadius: 5}}>
    <Card sx={{ display: 'flex', bgcolor: 'primary.lighter', borderRadius: 5, pt:0}} elevation={0} >
    <Stack direction="row" spacing={2} justifyContent='center' alignItems='center'>
      <CardContent sx={{ pl: 5, py:3}}>
        <ProfilePic src={user} sx={{ width: 120, height: 120 }} />
      </CardContent>
        <CardContent>
          <Typography component="div" variant="h2">
            Rose Kooto
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            User name 
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div" sx={{mt:3}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries,
          </Typography>
        </CardContent>
        <CardContent sx={{ py:4}}>
          <Stack  spacing={3} justifyContent='center' alignItems='flex-start'>
            <Stack  direction="row" spacing={2} >
              <Metric number="105" name="post"/>
              <Metric number="105" name="post"/>
              <Metric number="105" name="post"/>
              <Metric number="105" name="post"/>
            </Stack>
            <RoundButton size='small' label="following"/>
            <Stack>
              <Typography variant='subtitle2'>Other Pages</Typography>
              <Typography variant='caption'>Business One Longer Name</Typography>
              <Typography variant='caption'>Business One</Typography>
              <Typography variant='caption'>Business One</Typography>
              <Typography variant='caption'>Business One</Typography>
              <Typography variant='caption'>Business One</Typography>
            
            </Stack>
          </Stack>
        </CardContent>
       
      </Stack>
      <CardHeader
        action={
          <IconButton aria-label="settings">
           <MoreHorizIcon />
          </IconButton>
        }
      />
    </Card>
    </Paper>
  );
}
