import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import NavMenu from '../components/left panel components/nav menu';
import MyPages from '../components/left panel components/My Pages/my page';
import SuggestedList from '../components/right panel components/suggested list';
import Suggestions from '../components/right panel components/suggested user & page/suggestions';


export default function RightStack() {
  return (
    <div>
      <Stack spacing={1} sx={{mt:4}}>
       <SuggestedList/>
       <Suggestions/>
      </Stack>
    </div>
  );
}
