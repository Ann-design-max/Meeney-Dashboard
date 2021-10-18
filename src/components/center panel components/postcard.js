import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Paper, Stack} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CardHeader from '@mui/material/CardHeader';
import RoundButton from './../button';
import StyledTextfield from './../textfield';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function PostCard(props) {

  return (
    <Card variant='outlined' sx={{borderRadius: 5, px:3, py:3, minHeight:150}} elevation={0} >
      <Stack spacing={3} justifyContent='center' alignItems='flex-start'>
            <Grid container spacing={5}>
              <Grid item xs={10}><StyledTextfield fullWidth size='small' label='Share your Moments'/></Grid>
              <Grid item xs={2}> <RoundButton size='large' fullWidth label="post"/></Grid>
            </Grid>
            <Stack direction="row" spacing={2} justifyContent='center' alignItems='center'>
            <Button startIcon={<InsertPhotoIcon/>}>Image</Button>
            <Button startIcon={<VideocamIcon />}>Video</Button>
            <Button startIcon={<LocationOnIcon/>}>Location</Button>
            <Button startIcon={<LocalOfferIcon/>}>Tags</Button>
            </Stack>
      </Stack>
      </Card>
  );
}
