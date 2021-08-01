import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { joinDialogAtom } from "../utils/atoms";

function JoinClass() {
  const [open, setOpen] = useRecoilState(joinDialogAtom);
  const [classId, setClassId] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const joinClass = async () => {
    try {
      // check if class exists
      // add user to class
      // add class to user
      // alert done
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="joinClass">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Join class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter ID of the class to join the classroom
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Class Name"
            type="text"
            fullWidth
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={joinClass} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default JoinClass;
