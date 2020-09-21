import { ThemeProvider, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Provider } from "react-redux";
import theme from "../../commons/Theme";
import configStore from "../../redux/configStore";
import TaskBoard from "../TaskBoard/TaskBoard";
import styles from "./styles";

const store = configStore();
class App extends Component {
	render() {
		// const { classes } = this.props
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<TaskBoard />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default withStyles(styles)(App);
