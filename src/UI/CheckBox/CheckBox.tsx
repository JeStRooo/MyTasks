import * as React from 'react';

import Checkbox, {CheckboxProps} from '@mui/material/Checkbox';

const CheckBox: React.FC<CheckboxProps> = (checkboxProps) =>
    <Checkbox
      inputProps={{'aria-label': 'controlled'}}
      {...checkboxProps}
    />

export default CheckBox;