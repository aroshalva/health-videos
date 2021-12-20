import { makeStyles, Theme } from "@material-ui/core";
import { SectionTitle } from "../SectionTitle/SectionTitle";
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
      flexDirection: "column",
      marginBottom: "80px",
    },
  },
}));

export const YoutubeVideoList: React.FC<{
  dataItem: {
    name: string;
    videos: {
      quick: string[];
      long: string[];
    };
  };
}> = ({ dataItem: { name, videos } }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!!videos.quick.length && (
        <>
          <SectionTitle contentTitle={name}>Starter Videos</SectionTitle>

          <div className={classes.section}>
            {videos.quick.map((videoId, index) => (
              <YoutubePlayer key={index} videoId={videoId} />
            ))}
          </div>
        </>
      )}

      {!!videos.long.length && (
        <>
          <SectionTitle>Deep Dive</SectionTitle>

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
