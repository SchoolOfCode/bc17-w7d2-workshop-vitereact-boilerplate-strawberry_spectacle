'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/src/components/Hero/Hero";
import Hero2 from "@/src/components/Hero2/Hero2";
import Link from "next/link";
import Reviews from "@/src/components/Reviews/Reviews";

function handleClick() {
  console.log('TESTING 123');
};


export default function Home() {
  return (

   <main>
    <Hero />

   <Reviews />
   
   <Hero2 />
  
   </main>
  );
}

//set up a LINK href in page.js
  //add a Next.js "<Link href="/founders"></Link>" component 
//Create a LINK file
//IMPORT LINK FILE