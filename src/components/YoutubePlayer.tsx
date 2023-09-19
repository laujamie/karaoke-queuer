"use client";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubePlayerProps {
  videoId: string;
  className?: string;
}

export default function YoutubePlayer({
  videoId,
  className,
}: YoutubePlayerProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      className={className}
    />
  );
}
