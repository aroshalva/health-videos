import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export const QuickStart: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>yoyo</div>;
};
