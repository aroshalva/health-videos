import { makeStyles, Typography } from "@material-ui/core";
import { InfluencersType } from "allData";
import { ArrayElement } from "utils/typescript";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    maxWidth: "200px",
    cursor: "pointer",
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100px",
    },
  },
  image: ({ influencer }: { influencer: ArrayElement<InfluencersType> }) => {
    return {
      backgroundImage: `url("${influencer.imageUrl}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      marginBottom: "8px",
      [theme.breakpoints.only("xs")]: {
        width: "80px",
        height: "80px",
      },
    };
  },
  name: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "16px",
    },
  },
  description: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "13px",
    },
  },
}));

export const Influencer: React.FC<{
  influencer: ArrayElement<InfluencersType>;
}> = ({ influencer }) => {
  const classes = useStyles({ influencer });

  return (
    <div
      className={classes.root}
      onClick={() => {
        window.open(influencer.url);
      }}
    >
      <div className={classes.image} />

      <Typography variant="h6" className={classes.name}>
        <b>{influencer.name}</b>
      </Typography>

      {influencer.description && (
        <Typography className={classes.description}>
          {influencer.description}
        </Typography>
      )}
    </div>
  );
};
