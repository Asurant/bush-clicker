"use client";
import Image from "next/image";
import BushClick from "../components/BushClick";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1 className={"text-6xl self-center my-10"}></h1>
        <BushClick onClick={() => {console.log("boop!")}}/>
      </main>
    </div>
  );
}
