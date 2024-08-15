'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/src/components/Hero/Hero";
import Link from "next/link";

function handleClick() {
  console.log('TESTING 123');
};


export default function Home() {
  return (

   <main>
   <Link href="/founders" onClick={handleClick} >Founders Button</Link>
   <Hero />
   </main>
  );
}

//set up a LINK href in page.js
  //add a Next.js "<Link href="/founders"></Link>" component 
//Create a LINK file
//IMPORT LINK FILE