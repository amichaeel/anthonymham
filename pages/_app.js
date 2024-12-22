import "./globals.css"
import React, { useRef, useEffect } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component,  pageProps }) {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const { pageX, pageY } = e;
      spotlightRef.current.style.setProperty("--x", `${pageX}px`)
      spotlightRef.current.style.setProperty("--y", `${pageY}px`)
    }

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className={`group/spotlight relative ${inter.className}`}>
      <div ref={spotlightRef} className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute spotlight"></div>
      <Component {...pageProps} />
    </div>
  )
}