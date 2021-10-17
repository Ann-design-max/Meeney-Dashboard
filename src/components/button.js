import * as React from 'react';
import Chip from '@mui/material/Chip';


export default function RoundButton(props) {
  return (
    <div>
        <Chip label={props.label} size={props.size} color="primary" />
    </div>
  );
}
