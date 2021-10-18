import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import StyledBadge from '../badge';

export default function SwitchAccount(props) {
  const [alignment, setAlignment] = React.useState('social');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
      <div>
          <Paper elevation={0} >
             <Stack spacing={1} justifyContent='center' alignItems='center'py={2} my={2}>
              <Typography color='primary' variant='h6'>Switch Account</Typography>
                <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                >
                    <ToggleButton value="social"><StyledBadge anchorOrigin={{ vertical: 'top', horizontal: 'left'}} label={51} max={50} component={'Social'}/></ToggleButton>
                    <ToggleButton value="business"><StyledBadge label={51} max={50} component={'Business'}/></ToggleButton>
                </ToggleButtonGroup> 
            </Stack>
          </Paper>
      </div>
    
  );
}
