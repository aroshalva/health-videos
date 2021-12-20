import { makeStyles, Typography } from "@material-ui/core";
import { InfluencersType } from "allData";
import { ArrayElement } from "utils/typescript";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    maxWidth: "200px",
    cursor: "pointer",
  },
}));

export const Influencer: React.FC<{
  influencer: ArrayElement<InfluencersType>;
}> = ({ influencer }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      onClick={() => {
        window.open(influencer.url);
      }}
    >
      <div
        style={{
          backgroundImage: `url("${influencer.imageUrl}"`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
        }}
      />

      <Typography variant="h6">
        <b>{influencer.name}</b>
      </Typography>

      {influencer.description && (
        <Typography>{influencer.description}</Typography>
      )}
    </div>
  );
};
