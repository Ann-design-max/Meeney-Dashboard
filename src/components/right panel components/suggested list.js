import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ListingsItem from './listings item';

export default function SuggestedList() {

  return (
      <div>
        <Typography color='primary' variant='h6'>Suggested Listings</Typography>
          <Paper elevation={0} sx={{bgcolor: 'primary.lighter',borderRadius: 5}}>
            <Stack spacing={2} justifyContent='center' alignItems='center'py={2} my={2}>
            <ListingsItem/>
            <ListingsItem/>
            <ListingsItem/>
            <ListingsItem/>
            </Stack>
          </Paper>
      </div>
    
  );
}
