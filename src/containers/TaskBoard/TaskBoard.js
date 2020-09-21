import { Button, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants/constants";
import { connect } from "react-redux";
import TaskList from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/actTask";

class TaskBoard extends Component {
  state = {
    open: false,
  };
  renderBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList key={status.value} task={taskFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  openForm = (params) => {
    this.setState({
      open: true,
    });
  };
  renderForm = (params) => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };
  componentDidMount() {
    const { taskActionsCreator } = this.props;
    const { fetchListTaskRequest } = taskActionsCreator;
    fetchListTaskRequest();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          onClick={this.openForm}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <AddIcon />
          Thêm mới công việc
        </Button>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreator: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
  }),
  listTask: PropTypes.array,
};
const mapStateToProps = (state, ownProps) => {
  return {
    listTask: state.reducerTask.listTask,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
