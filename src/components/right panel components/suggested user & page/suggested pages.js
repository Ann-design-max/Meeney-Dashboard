import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import SinglePage from '../../left panel components/My Pages/single page';
import PageItem from './page item';

export default function SuggestedList() {

  return (
      <div>
          <Paper elevation={0} sx={{bgcolor: 'primary.lighter',borderRadius: 5}}>
            <Stack spacing={1} justifyContent='center' alignItems='center'py={2} my={2}>
            <PageItem/>
            <PageItem/>
            <PageItem/>
            <PageItem/>
            <PageItem/>
            <PageItem/>
            </Stack>
          </Paper>
      </div>
    
  );
}
