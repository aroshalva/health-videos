import { makeStyles } from "@material-ui/core";
import { allData } from "allData";
import { YoutubeVideoList } from "App/YoutubeVideoList/YoutubeVideoList";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const IntermittentFasting: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <YoutubeVideoList videos={allData.intermittentFasting.videos} />
    </div>
  );
};
