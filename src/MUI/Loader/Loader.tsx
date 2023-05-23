import React from 'react';

import {styled} from '@mui/material';

import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';

const StyledWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledContainer = styled('div')({
  position: 'relative',
  width: '60px',
  height: '60px',
});

const StyledCircularProgress = styled(CircularProgress)({
  position: 'absolute',
});

const Loader:React.FC<CircularProgressProps> = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledCircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={60}
          thickness={4}
          value={100}
        />
        <StyledCircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
            animationDuration: '550ms',
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={60}
          thickness={4}
        />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Loader;