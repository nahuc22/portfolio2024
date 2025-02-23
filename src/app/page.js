"use client"
import "./page.module.css";


export default function Home() {
  return (
    <div 
      id="home" 
      className="w-full h-full bg-cover min-h-[100vh] px-[2em] py-[6em]"
      style={{ backgroundImage: `url("/background2.jpg")`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: '50% 50%'}}
    >
      <h1 className="absolute -translate-x-2/4 -translate-y-2/4 text-[5vw] font-normal tracking-[-0.04em] text-white left-2/4">
        Index<sup>(01)</sup>
      </h1>
    </div>
  );
}
