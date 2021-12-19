import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { YouTubePlayer } from "youtube-player/dist/types";
import {
  fetchYoutubeVideoOEmbed,
  YoutubeVideoOEmbed,
} from "api/youtubeOEmbed/youtubeOEmbed";

const useStyles = makeStyles(() => ({
  video: {
    width: "100%",
    height: "100%",
    display: "flex",
    borderRadius: "7px",
  },
  videoWrapper: {
    padding: "8px",
    margin: "8px 5px",
    background: "#9ee9d894",
    borderRadius: "7px",
  },
  videoTitle: {
    overflow: "hidden",
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
      setVideoInfo(await fetchYoutubeVideoOEmbed({ videoId }));
    };

    innerFn();
  }, [videoId]);

  useEffect(() => {
    if (player) {
      setDuration(secondsToTimer(player.getDuration()));
    }
  }, [player]);

  console.log(111, videoInfo);

  return (
    <div>
      <div className={classes.videoWrapper}>
        <YouTube
          videoId={videoId}
          className={classes.video}
          onReady={onReady}
        />
      </div>

      <div>{duration}</div>

      {videoInfo && (
        <>
          <div className={classes.videoTitle}>{videoInfo.title}</div>
        </>
      )}
    </div>
  );
};
