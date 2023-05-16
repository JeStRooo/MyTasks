import * as React from 'react';

import Checkbox, {CheckboxProps} from '@mui/material/Checkbox';

const CheckBox: React.FC<CheckboxProps> = (checkboxProps) =>
    <Checkbox
      inputProps={{'aria-label': 'controlled'}}
      sx={{
          color: '#8d8a8a',
          '& .Mui-checked': {
              color: '#8d8a8a',
          },
          '& .MuiIconButton-root': {
              border: '2px solid #8d8a8a',
          },
          '& .Mui-checked .MuiIconButton-root': {
              border: '2px solid #8d8a8a',
          },
      }}
      {...checkboxProps}
    />

export default CheckBox;