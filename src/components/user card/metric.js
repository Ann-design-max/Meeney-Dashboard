import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Metric(props) {
  return (
    <div>
      <Stack spacing={0}>
      <Typography component="div" variant="h6">
            {props.number}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            {props.name}
          </Typography>
      </Stack>
    </div>
  );
}
