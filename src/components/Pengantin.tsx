import React from "react";
import { HomeScreenProps } from "./HomeScreen";
import Image from "next/image";
const Pengantin: React.FC<HomeScreenProps> = ({ background }) => {
  return (
    <>
      <div className=" relative ">
        <Image
          src={background}
          alt="background image"
          className="absolute h-full w-full object-cover transform -scale-x-100"
        />
        <div className="relative container mx-auto  flex flex-col items-center justify-center min-h-screen px-12">
          <p>Pengantin Wanita</p>
          <p>Nama Penganti Wanita</p>
          <p>Putri dari bapak & ibu</p>
          <p>Pengantin Wanita</p>
          <p>Nama Penganti Wanita</p>
          <p>Putri dari bapak & ibu</p>
        </div>
      </div>
    </>
  );
};

export default Pengantin;
