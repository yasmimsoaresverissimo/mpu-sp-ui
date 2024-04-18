import React from 'react';
import { Dialog, DialogTitle, LinearProgress } from '@mui/material';
import './Modal.css';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="modal">
        <DialogTitle className="modal-title">Carregando...</DialogTitle>
        <div className="modal-content">
          <LinearProgress />
        </div>
      </div>
    </Dialog>
  );
};

export default ModalComponent;