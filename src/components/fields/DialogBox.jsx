import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
// import { styled } from "@mui/system";

const DialogBox = ({ open, onClose, title, content, contentText, actions }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disablebackdropclick="true"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title" sx={{ bgcolor: "#14C38E", maxWidth: "230px"}}>{title}</DialogTitle>}
      {content && (
        <DialogContent
          sx={{
            maxWidth: "230px",
            my:3
          }}
        >
          {content}
          {contentText && (
            <DialogContentText id="alert-dialog-description">
              {contentText}
            </DialogContentText>
          )}
        </DialogContent>
      )}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default DialogBox;
