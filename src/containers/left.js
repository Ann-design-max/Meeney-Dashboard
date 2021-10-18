import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SwitchAccount from '../components/left panel components/switch account';
import NavMenu from '../components/left panel components/nav menu';
import MyPages from '../components/left panel components/My Pages/my page';



export default function LeftStack() {
  return (
    <div>
      <Stack spacing={2}>
        <SwitchAccount/>
        <NavMenu/>
        <MyPages/>
       
      </Stack>
    </div>
  );
}
