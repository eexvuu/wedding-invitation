import React from "react";
import { HomeScreenProps } from "./HomeScreen";
import Image from "next/image";
import { RevealAnimation } from "./RevealAnimation";
const Pengantin: React.FC<HomeScreenProps> = ({
  background,
  namaPria,
  namaWanita,
}) => {
  return (
    <>
      <div className=" relative overflow-hidden">
        <Image
          src={background}
          alt="background image"
          className="absolute h-full w-full object-cover transform -scale-x-100"
        />
        <div className="relative container mx-auto  flex flex-col items-center justify-center min-h-screen px-12 text-center">
          <div className=" w-full">
            <RevealAnimation scaleHidden={0} scaleVisible={1}>
              <h1 className="text-xl uppercase tracking-wide my-6 font-semibold">
                Pernikahan dari
              </h1>
            </RevealAnimation>
            <RevealAnimation xHidden={75} xVisible={0}>
              <div className="border-4 border-[#ce8664] bg-white/50 py-4 px-6 rounded-xl text-md w-full">
                <p className="font-parisienne text-4xl my-4">{namaWanita}</p>
                <p className="text-sm">Putri kedua dari</p>
                <p className="font-bold">Bapak Akbar</p>
                <p>dan</p>
                <p className="font-bold"> Ibu Siti</p>
              </div>
            </RevealAnimation>
            <RevealAnimation scaleHidden={0} scaleVisible={1}>
              <h1 className="text-4xl uppercase tracking-wide my-6 font-parisienne">
                &
              </h1>
            </RevealAnimation>
            <RevealAnimation xHidden={-75} xVisible={0}>
              <div className="border-4 border-[#ce8664] bg-white/50 py-4 px-6 rounded-xl text-md w-full">
                <p className="font-parisienne text-4xl my-4">{namaPria}</p>
                <p className="text-sm">Putra kedua dari</p>
                <p className="font-bold">Bapak Akbar</p>
                <p>dan</p>
                <p className="font-bold"> Ibu Siti</p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pengantin;
