import * as React from 'react';
import Checkbox, {CheckboxProps} from '@mui/material/Checkbox';

const CheckBox: React.FC<CheckboxProps> = (props) => {
  return (
    <Checkbox
      inputProps={{'aria-label': 'controlled'}}
      {...props}
    />
  );
}


export default CheckBox;

