"use client";
import music from "../assets/backsound.mp3";
function Music() {
  const playMusic = () => {
    new Audio(music).play();
  };
  return (
    <>
      <button
        className="bg-red-500 text-white fixed right-5 bottom-5 p-5 rounded-full cursor-pointer"
        onClick={playMusic}
      >
        music
      </button>
    </>
  );
}

export default Music;
