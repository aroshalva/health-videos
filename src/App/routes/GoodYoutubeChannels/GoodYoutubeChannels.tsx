import { makeStyles } from "@material-ui/core";
import { SectionsOfInfluencers } from "allData";
import { InfluencerList } from "App/components/InfluencerList/InfluencerList";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const GoodYoutubeChannels: React.FC<{
  sectionsOfInfluencers: SectionsOfInfluencers;
}> = ({ sectionsOfInfluencers }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sectionsOfInfluencers.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>

          <InfluencerList influencers={item.list} />
        </div>
      ))}
    </div>
  );
};
