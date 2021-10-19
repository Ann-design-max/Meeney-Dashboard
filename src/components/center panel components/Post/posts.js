import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Paper, Stack} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardHeader from '@mui/material/CardHeader';
import RoundButton from '../../button';
import StyledTextfield from '../../textfield';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import Postpic from '../../../assests/post.png'
import ProfilePic from '../../avatar';
import profile from '../../../assests/postprofile.png'
import Comments from './posts comment';



export default function Post(props) {

  return (
    <Card sx={{borderRadius: 5, px:3, pt:2, pb:4,  minHeight:150}} elevation={0} >
      <CardHeader
      sx={{py:0}}
        action={
          <IconButton aria-label="settings">
           <MoreHorizIcon />
          </IconButton>
        }
      />
       <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ProfilePic src={Postpic} sx={{ width: 350, height: 380}} variant='rounded'/>
          </Grid>
          <Grid item xs={12}md={6}> 
            <Stack direction="row" spacing={3} justifyContent='flex-start' alignItems='center'>
                <ProfilePic src={profile} sx={{ width: 40, height: 40}}/>
                <Stack spacing={0} justifyContent='center' alignItems='flex-start'>
                  <Typography component="div" variant="h6">Rose kooto</Typography>
                  <Stack direction="row" spacing={3} justifyContent='center' alignItems='center'>
                    <Typography variant="caption" color="text.secondary" component="div">Abuja</Typography>
                    <Typography variant="caption" color="text.secondary" component="div">11hr ago</Typography>
                    <Typography variant="caption" color="text.secondary" component="div">200 likes</Typography>
                    <Typography variant="caption" color="text.secondary" component="div">20 Replies</Typography>
                  </Stack>
                </Stack>
            </Stack>
            <Typography variant="body2" color="text.secondary" component="div" sx={{mt:1}}>
            is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
        
            <Comments/>

            <Stack sx={{mt:2}} direction="row"  justifyContent='space-between' alignItems='center'>
              <Stack direction="row" spacing={0} justifyContent='flex-start' alignItems='center'>
                <IconButton color="error" aria-label="upload picture" component="span"><FavoriteIcon/></IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span"><ChatBubbleOutlineRoundedIcon/></IconButton>
                <IconButton color="primary" aria-label="upload picture" component="span"><BookmarkBorderRoundedIcon/></IconButton>
              </Stack>
              <IconButton color="primary" aria-label="upload picture" component="span"><ReplyIcon/></IconButton>
            </Stack>
          </Grid>
       </Grid>
     
      </Card>
  );
}
