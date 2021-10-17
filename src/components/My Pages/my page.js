import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Chip from '@mui/material/Chip';
import SearchBar from '../search';
import Container  from '@mui/material/Container';
import SinglePage from './single page';

export default function MyPages() {

  return (
      <div>
          <Paper elevation={0} >
            <Stack spacing={1} justifyContent='center' alignItems='center'py={2} my={2}>
              
              <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                <Typography color='primary' variant='h6'>My Pages</Typography>
                <Button variant="contained"disableElevation startIcon={<ControlPointIcon />}> Create New</Button>
            </Stack>
            <Container>
               <SearchBar/>
            </Container>
            <SinglePage primary ='Business Name' secondary='Private Seller'/>
            <SinglePage primary ='Business Name' secondary='Business page'/>
            <SinglePage primary ='Business Name' secondary='Business page'/>
            <SinglePage primary ='Business Name' secondary='Private Seller'/>
            </Stack>
          </Paper>
      </div>
    
  );
}
