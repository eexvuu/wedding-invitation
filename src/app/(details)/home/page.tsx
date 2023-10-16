"use client";

import Intro from "@/components/Intro";
import Pengantin from "@/components/Pengantin";
import getData from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const data = getData().data;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Handle initial play
    togglePlay();
  }, []);

  return (
    <>
      {data && (
        <>
          <audio ref={audioRef} src="/backsound.mp3" />
          <Intro
            background={data.background}
            namaPria={data.namaMempelaiPria}
            namaWanita={data.namaMempelaiWanita}
          />
          <Pengantin
            background={data.background}
            namaPria={data.namaMempelaiPria}
            namaWanita={data.namaMempelaiWanita}
          />

          {/* Add a button to toggle play/pause */}
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </>
      )}
    </>
  );
}
