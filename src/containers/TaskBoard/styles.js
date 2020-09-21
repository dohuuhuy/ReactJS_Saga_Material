const styles = (theme) => ({
  box: {
    display: "flex",
    alignItems: "center",
  },
  shape: {
    padding: 20,
    margin: 10,
    // backgroundColor: "red",
    // borderColor: "yellow",
    // borderRadius: 40,
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
  },
});

export default styles;
