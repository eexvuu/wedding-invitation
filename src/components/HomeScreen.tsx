"use client";

import Image from "next/image";
import React from "react";
import aksesoris from "@/assets/aksesoris.png";
import Link from "next/link";

export type HomeScreenProps = {
  namaPria: string;
  namaWanita: string;
  namaTamu?: string;
  background: string;
};

const HomeScreen: React.FC<HomeScreenProps> = ({
  namaPria,
  namaWanita,
  namaTamu,
  background,
}) => {
  return (
    <>
      <main className="min-h-screen w-full relative">
        <Image
          src={background}
          alt="background image"
          className="absolute h-full w-full object-cover"
        />
        <Image
          src={aksesoris}
          alt="aksesoris"
          height={250}
          className="absolute top-0 right-0 animate-pulse animation-delay-100"
        />
        <Image
          src={aksesoris}
          alt="aksesoris"
          height={250}
          className="absolute bottom-0 left-0 rotate-180 animate-pulse"
        />
        <div className="container relative mx-auto ">
          <div className="text-center text-slate-800 flex flex-col justify-center items-center h-screen space-y-12">
            <h1 className="text-lg font-semibold uppercase tracking-wide">
              Undangan Pernikahan
            </h1>
            <div className="text-5xl font-parisienne space-y-4">
              <h1>{namaPria}</h1>
              <h1>&</h1>
              <h1>{namaWanita}</h1>
            </div>
            <div className="flex items-center justify-center ">
              <div className="bg-white font-semibold text-center rounded-3xl border shadow-xl p-10 max-w-xs">
                <h3 className=" text-slate-600 text-base">
                  {" "}
                  Kepada Saudara/i :{" "}
                </h3>
                <h1 className="text-xl text-gray-700 mt-4 font-bold">
                  {" "}
                  {namaTamu}{" "}
                </h1>
                <Link href="/home">
                  <button
                    className="bg-[#F5DCD0] px-8 py-2 mt-4 rounded-3xl text-black font-semibold tracking-wide"
                  >
                    Buka Undangan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
