import React, { useEffect, useState } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll"
import Image from "next/image"

export default function Home() {
  const [isPulsing, setIsPulsing] = useState(false)

  const handlePulse = () => {
    setIsPulsing(true)
    setTimeout(() => setIsPulsing(false), 1800)
  }

  return (
    <main className="max-w-xl mx-auto">
      <header className="flex justify-between pt-16 pb-16 px-4">
        <h1 className="text-base font-semibold text-white">ah</h1>
        <nav className="flex gap-4 text-white">
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer"
            onClick={handlePulse}
          >Contact</Link>
        </nav>
      </header>

      <main className="px-4">
        <section className="pb-16">
          <h1 className="font-semibold text-4xl mb-4 text-white">
            <span className="animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Hello, I&apos;m Anthony.</span>
            <br />
            <span className=" text-3xl text-white/60">A software engineer / computer science student from Miami, Fl.</span>
          </h1>
          <p className="text-white/70 text-lg">I&apos;m Anthony, a current student at Florida International University (FIU) studying computer science. Currently, I work on the team at FIU&apos;s Applied Research Center as a software developer, primarily focusing on customer-facing solutions. </p>
        </section>

        {/* Projects */}
        <section className="pb-16 pt-10">
          <h2 className="font-semibold text-base mb-4 text-white/90">Projects</h2>
          <div className="space-y-4">

            <div className="flex gap-4 items-center bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-slate-700">
              <Image alt="placeholder-logo" className="rounded-lg" src="/placeholder.png" width={40} height={40} />
              <span>
                <h3 className="text-white font-medium text-base">Orbit</h3>
                <h3 className="text-white/70 text-sm">A decentralized social media platform.</h3>
              </span>
            </div>

            <div className="flex gap-4 items-center bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-slate-700">
              <Image alt="placeholder-logo" className="rounded-lg" src="/placeholder.png" width={40} height={40} />
              <span>
                <h3 className="text-white font-medium text-base">Promptora</h3>
                <h3 className="text-white/70 text-sm">A place to share and discover AI prompts.</h3>
              </span>
            </div>

            <div className="flex gap-4 items-center bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-slate-700">
              <Image alt="placeholder-logo" className="rounded-lg" src="/placeholder.png" width={40} height={40} />
              <span>
                <h3 className="text-white font-medium text-base">Journey</h3>
                <h3 className="text-white/70 text-sm">A web app making it easy to create iteneries when you&apos;re on vacation.</h3>
              </span>
            </div>

          </div>
        </section>

        {/* Experience */}
        <section className="pb-16 pt-10">
          <h2 className="font-semibold text-base mb-4 text-white/90">Experience</h2>
          <div className="space-y-4 group">

            <div className="grid grid-cols-2 gap-4 hover:bg-slate-800 hover:scale-105 hover:p-3 transition-all group duration-300 rounded-xl cursor-pointer group-hover:opacity-50 group-hover:hover:opacity-100">
              <span className="text-white/50 font-thin">2023 - present</span>
              <div className="flex flex-col">
                <span className="text-white group-hover:text-teal-200">FIU: Applied Research Center</span>
                <span className="text-white/40 text-sm">Software Developer Intern</span>
                <p className="mt-2 text-white/70 text-md">Focusing on customer-facing solutions.</p>

                <div className="flex flex-wrap mt-3">
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">C#</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">.NET</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">React</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">NextJS</div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 group hover:bg-slate-800 transition-all duration-300 hover:scale-105  hover:p-3 rounded-xl cursor-pointer group group-hover:opacity-50 group-hover:hover:opacity-100">
              <span className="text-white/50">2023 - 2023</span>
              <div className="flex flex-col">
                <span className="text-white group-hover:text-teal-200">MDC: School of Science</span>
                <span className="text-white/40 text-sm">Undergraduate Research Assistant - Physics</span>
                <p className="mt-2 text-white/70 text-md">Worked alongside Dr.Souchak on the interaction between radio frequencies and photonic band gap materials. Created data visualizations of our findings.</p>

                <div className="flex flex-wrap mt-3">
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Python</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Matlab</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Pyplot</div>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 hover:bg-slate-800 group transition-all hover:p-3 hover:scale-105 duration-300 rounded-xl cursor-pointer group-hover:opacity-50 group-hover:hover:opacity-100">
              <span className="text-white/50">2022 - 2023</span>
              <div className="flex flex-col">
                <span className="text-white group-hover:text-teal-200">MDC: Engineering and Technology</span>
                <span className="text-white/40 text-sm">Computer Science Tutor</span>
                <p className="mt-2 text-white/70 text-md">Helping over 200+ students with computer science related courses, leading to increased test scores.</p>

                <div className="flex flex-wrap mt-3">
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Python</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Java</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">C</div>
                  <div className="flex items-center bg-teal-400/10 text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">C++</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-8">
          <Element name="contact" />
          <h2 id="contact" className={`font-semibold text-base mb-4 text-white/90 ${isPulsing ? "animate-pulse" : ""}`}>Contact</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <span className="text-white/50">Email</span>
              <a className="text-white/50" href="mailto:mail@anthonymham.com">mail@anthonymham.com</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <span className="text-white/50">Twitter</span>
              <a className="text-white/50" href="https://www.x.com/a_michaeel">@a_michaeel</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <span className="text-white/50">GitHub</span>
              <a className="text-white/50" href="https://www.github.com/amichaeel">git/amichaeel</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <span className="text-white/50">LinkedIn</span>
              <a className="text-white/50" href="https://www.linkedin.com/in/xnthiny">in/xnthiny</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-8 flex items-center justify-center">
          <p className="text-white/50 text-xs">Coded in Visual Studio Code by Anthony Ham. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Hover typeface.</p>
        </section>
      </main>
    </main>
  )
}