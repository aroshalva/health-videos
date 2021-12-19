import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const GuruPeople: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>GuruPeople</div>;
};
