import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const GoodYoutubeChannels: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>GoodYoutubeChannels</div>;
};
