import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function ProfilePic(props) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Avatar alt="Remy Sharp"  src={props.src} sx={props.sx} variant={props.variant}/>
      
    </Stack>
  );
}
