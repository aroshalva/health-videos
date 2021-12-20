import { makeStyles } from "@material-ui/core";
import { InfluencersType } from "allData";
import { Influencer } from "./Influencer/Influencer";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export const InfluencerList: React.FC<{ influencers: InfluencersType }> = ({
  influencers,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {influencers.map((influencer) => (
        <Influencer key={influencer.url} influencer={influencer} />
      ))}
    </div>
  );
};
