import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export const FoodMap: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>Food Map</div>;
};
