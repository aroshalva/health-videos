import { Link, makeStyles, Theme, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { YouTubePlayer } from "youtube-player/dist/types";
import {
  fetchYoutubeVideoOEmbed,
  YoutubeVideoOEmbed,
} from "api/youtubeOEmbed/youtubeOEmbed";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "min-content",
    marginBottom: "25px",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      width: "100%",
    },
  },
  videoWrapper: {
    padding: "8px",
    margin: "8px 5px",
    background: "#9ee9d894",
    borderRadius: "7px",
    width: "fit-content",
  },
  video: {
    width: "400px",
    maxWidth: "400px",
    height: "225px",
    display: "flex",
    borderRadius: "7px",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  duration: {
    marginRight: "6px",
    background: "#ffc0cbc7",
    padding: "4px 7px",
    borderRadius: "10px",
    fontSize: "20px",
    width: "fit-content",
    lineHeight: "normal",
  },
  videoTitle: {
    "& b": {
      [theme.breakpoints.up("sm")]: {
        // display: "-webkit-box",
        // lineClamp: "2",
        // boxOrient: "vertical",
        // overflow: "hidden",
      },
    },
  },
}));

const secondsToTimer = (allSeconds: number) => {
  const hours = Math.floor(allSeconds / (60 * 60));

  const minutes = Math.floor((allSeconds - hours * 60 * 60) / 60);

  const seconds = allSeconds % 60;

  const attachZeros = (num: number) => (num > 9 ? num : `0${num}`);

  return `${hours ? `${attachZeros(hours)}:` : ""}${
    minutes ? `${attachZeros(minutes)}` : "00"
  }:${seconds ? `${attachZeros(seconds)}` : "00"}`;
};

export const YoutubePlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const classes = useStyles();
  const [player, setPlayer] = useState<null | YouTubePlayer>(null);
  const [duration, setDuration] = useState<null | string>(null);
  const [videoInfo, setVideoInfo] = useState<null | YoutubeVideoOEmbed>(null);

  const onReady = (event: { target: YouTubePlayer }) => {
    setPlayer(event.target);
  };

  useEffect(() => {
    const innerFn = async () => {
      const videoInfo = await fetchYoutubeVideoOEmbed({ videoId });

      setVideoInfo(videoInfo);

      // console.log("videoInfo", videoInfo);
    };

    innerFn();
  }, [videoId]);

  useEffect(() => {
    if (player) {
      setDuration(secondsToTimer(player.getDuration()));
    }
  }, [player]);

  return (
    <div className={classes.root}>
      <div className={classes.videoWrapper}>
        <YouTube
          videoId={videoId}
          className={classes.video}
          onReady={onReady}
          opts={{ playerVars: { playsinline: 0 } }}
        />
      </div>

      <div style={{ padding: "0 12px", width: "100%" }}>
        {videoInfo && (
          <>
            <Typography className={classes.videoTitle}>
              <b>{videoInfo.title}</b>
            </Typography>
          </>
        )}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "9px" }}
        >
          <Typography className={classes.duration}>{duration}</Typography>

          {videoInfo && (
            <Link color="inherit" href={videoInfo.author_url} target="_blank">
              <Typography>{videoInfo.author_name}</Typography>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
