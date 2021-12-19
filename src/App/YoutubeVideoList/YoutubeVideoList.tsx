import { makeStyles, Typography } from "@material-ui/core";
import { YoutubePlayer } from "./YoutubePlayer/YoutubePlayer";

const videoIdList = [
  "dW_99QcCTzE",
  "VIhhrYjVhOk",
  "DnRQJzK6yvI",
  "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
  // "DnRQJzK6yvI",
];

const useStyles = makeStyles(() => ({
  root: { width: "100%" },
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "50px",
  },
  sectionTitle: {
    color: "#428d7c",
    background: "#ffebc8",
    fontSize: "2rem",
    padding: "5px 15px",
    marginBottom: "15px",
    width: "100%",
  },
}));

export const YoutubeVideoList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sectionTitle}>
        <Typography variant="h4">Quick Videos</Typography>
        {/* <Typography variant="h4">Long Videos</Typography> */}
      </div>

      <div className={classes.section}>
        {videoIdList.map((videoId, index) => (
          <YoutubePlayer key={index} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};
