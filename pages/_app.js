import "./globals.css"
import React, { useRef, useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const { pageX, pageY } = e;
      const body = document.body;
      body.style.setProperty("--x", `${pageX}px`);
      body.style.setProperty("--y", `${pageY}px`);
    }

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return <Component {...pageProps} />
}