import { Box, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import TaskItem from "../TaskItem/TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, task, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>

        <div className={classes.wrapperListTask}>
          {task.map((task, index) => {
            return <TaskItem task={task} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
