import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ToggleButtons from '../components/switch account';
import NavMenu from '../components/nav menu';
import MyPages from '../components/My Pages/my page';


export default function LeftStack() {
  return (
    <div>
      <Stack spacing={2}>
        <ToggleButtons/>
        <NavMenu/>
        <MyPages/>
       
      </Stack>
    </div>
  );
}
