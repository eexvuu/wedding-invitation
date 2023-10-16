"use client";
import React, { useState } from "react";
import { useRef } from "react";

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const play = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <div>
        <button onClick={play}>Play</button>
        <audio ref={audioRef} src="/backsound.mp3" />
      </div>
    </>
  );
}

export default Music;
