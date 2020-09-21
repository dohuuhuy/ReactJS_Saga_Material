import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, TextField, withStyles } from "@material-ui/core";
import styles from "./styles";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog
        Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
          />
          <TextField id="standard-number" label="Number" type="number" />
          <TextField id="standard-search" label="Search field" type="search" />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
