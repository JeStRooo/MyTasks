import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  padding: '15px'
};

interface MuiModalProps {
  open: boolean,
  handleModal: () => void
}

const MuiModal: React.FC<MuiModalProps> = ({open, handleModal}) => {
  return (
      <Modal
        open={open}
        onClose={handleModal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Подробная информация
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Добрый день! Я – молодой веб-разработчик, и заинтересован в работе на вашу компанию.
            Жду вашего ответа и хорошего дня!
          </Typography>
        </Box>
      </Modal>
  );
}

export default MuiModal;