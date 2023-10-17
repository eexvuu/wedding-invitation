/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { HomeScreenProps } from "./HomeScreen";
import { RevealAnimation } from "./RevealAnimation";

const Intro: React.FC<HomeScreenProps> = ({
  background,
  namaPria,
  namaWanita,
}) => {
  return (
    <>
      <div className="min-h-screen relative ">
        <Image
          src={background}
          alt="background image"
          className="absolute h-full w-full object-cover rotate-180"
        />
        <div className="relative container mx-auto  flex flex-col items-center justify-center min-h-screen px-12">
          <div className="text-center space-y-3">
            <RevealAnimation yHidden={75} yVisible={0}>
              <p className="text-lg tracking-wide">Assalamu'aikum Wr. Wb.</p>
              <p className="py-5 leading-6">
                Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala.
                InsyaAllah Kami akan menyelenggarakan acara pernikahan
              </p>
              <p className="font-parisienne text-4xl my-3">
                <p>{namaPria}</p>
                <p>&</p>
                <p>{namaWanita}</p>
              </p>
              <p>Minggu, 25 Januari 2030</p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
