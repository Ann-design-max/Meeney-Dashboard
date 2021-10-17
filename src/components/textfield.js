import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#490057',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#490057',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: 50,
    '& fieldset': {
      borderColor: '#ced4da',
    },
    '&:hover fieldset': {
      borderColor: '#490057',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#490057',
    },
  },
});


export default function StyledTextfield(props) {
  return (
    <div>
      <CssTextField label={props.label} fullWidth  size={props.size} id="custom-css-outlined-input" />
    </div>
  );
}
