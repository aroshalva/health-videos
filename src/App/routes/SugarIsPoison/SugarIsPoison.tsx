import { makeStyles } from "@material-ui/core";
import { allData } from "allData";
import { YoutubeVideoList } from "App/components/YoutubeVideoList/YoutubeVideoList";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const SugarIsPoison: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <YoutubeVideoList dataItem={allData.sugarIsPoison} />
    </div>
  );
};
