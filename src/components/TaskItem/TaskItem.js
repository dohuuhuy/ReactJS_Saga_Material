import { CardActions, Fab, Icon, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react'
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, task, status } = this.props;
        const { id, title } = task;
        return (
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {
                                status.label
                            }
                        </Grid>
                    </Grid>
                    <p>
                        {
                            task.description
                        }
                    </p>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <Fab color='primary'
                        aria-label='Edit'
                        size='small'
                        className={classes.Fab}>
                        <Icon fontSize='small'>
                            edit_icon
                    </Icon>
                    </Fab>

                    <Fab color='primary' size='small'
                        aria-label='Delete'
                        className={classes.Fab}>
                        <Icon fontSize='small'>
                            delete_icon
                    </Icon>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(TaskItem);