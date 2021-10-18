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
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardMedia from '@mui/material/CardMedia';
import Postpic from '../../../assests/post.png'
import ProfilePic from '../../avatar';
import SmallerProfile from '../../../assests/smaller pic.png'


export default function Comments(props) {
  return (
    <Card sx={{ pl:3, pt:3, minHeight:150}} elevation={0} >
      <Button size='small'>view all comments</Button>
        <Stack direction="row" spacing={2} justifyContent='flex-start' alignItems='flex-start'>
            <ProfilePic src={SmallerProfile} sx={{ width: 35, height: 35, mt:1}}/>
            <Stack spacing={0} justifyContent='center' alignItems='flex-start'>
              <Typography component="div" variant="h6">Rose kooto</Typography>
              <Typography variant="caption" color="text.secondary" component="div">Last seen 11hr ago</Typography>
              <Typography variant="body2" color="text.secondary" component="div" sx={{mt:1}}>
              is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type Read more....
              </Typography>
            </Stack>
        </Stack>
      </Card>
  );
}
