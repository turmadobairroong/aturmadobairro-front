/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from "react";

export const HeroAdopt = () => {
  return (
    <section className="flex w-full items-center justify-center px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4 md-8:flex-col md-8:gap-6">
      <div className="flex w-[70%] flex-col items-start justify-center gap-4 md-8:w-full">
        <h3 className="text-2xl font-extralight">Quero Adotar</h3>
        <h1 className="text-7xl md-5:text-6xl md-7:text-5xl md-9.1:text-5xl">
          Faça a diferença na vida de um animal
        </h1>
      </div>
      <div className="flex w-[30%] flex-wrap items-center justify-end gap-4 bg-primary md-8:w-full md-8:justify-start">
        <Image
          alt=""
          className="h-[20rem] w-60"
          src="/groupDonate.png"
          width={175}
          height={226}
        ></Image>
      </div>
    </section>
  );
};
