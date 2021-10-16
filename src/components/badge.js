import * as React from 'react';
import Badge from '@mui/material/Badge';


export default function StyledBadge(props) {
  return (
    <Badge badgeContent={props.label} color="secondary">
      {props.component}
    </Badge>
  );
}