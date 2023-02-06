
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import * as React from "react";

export interface ChallengeDetailProps{
    isOpen: boolean;
    setOpen: () => void;
}

export default function ChallengeDetail({
    isOpen,
    setOpen,
}:ChallengeDetailProps){
    return (<Dialog open={isOpen}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Subscribe</Button>
        </DialogActions>
      </Dialog>);
}