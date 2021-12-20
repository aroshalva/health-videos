import { makeStyles, Theme, Typography } from "@material-ui/core";
import { YoutubePlayer } from "./YoutubePlayer/YoutubePlayer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "500px",
    },
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
    marginBottom: "50px",
    [theme.breakpoints.only("xs")]: {
      marginBottom: "20px",
      flexDirection: "column",
    },
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

export const YoutubeVideoList: React.FC<{
  videos: {
    quick: string[];
    long: string[];
  };
}> = ({ videos }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!!videos.quick.length && (
        <>
          <div className={classes.sectionTitle}>
            <Typography variant="h4">Quick Videos</Typography>
          </div>

          <div className={classes.section}>
            {videos.quick.map((videoId, index) => (
              <YoutubePlayer key={index} videoId={videoId} />
            ))}
          </div>
        </>
      )}

      {!!videos.long.length && (
        <>
          <div className={classes.sectionTitle}>
            <Typography variant="h4">Long Videos</Typography>
          </div>

          <div className={classes.section}>
            {videos.long.map((videoId, index) => (
              <YoutubePlayer key={index} videoId={videoId} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
