import React, { useDebugValue, useEffect, useRef, useState } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowUpRightDots, faArrowUpRightFromSquare, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image"

export default function Home() {
  const [isBouncing, setIsBouncing] = useState(false)
  const spotlightRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const { pageX, pageY } = e;
      spotlightRef.current.style.setProperty("--x", `${pageX}px`);
      spotlightRef.current.style.setProperty("--y", `${pageY}px`);
    }

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const handleBounce = () => {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 1800)
  }

  return (
    <div ref={spotlightRef} className="spotlight">
      <main className="max-w-2xl mx-auto">
        <header className="flex justify-between pt-16 pb-16 px-4">
          <h1 className="text-base font-semibold text-white">ah</h1>
          <nav className="flex gap-4 text-white">
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer"
              onClick={handleBounce}
            >Contact</Link>
          </nav>
        </header>

        <main className="px-4">
          <section className="pb-16">
            <h1 className="font-semibold text-4xl mb-4 text-white">
              <span className="animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Anthony Ham</span>
              <br />
              <span className=" text-3xl text-white/60">Software engineer / computer science student from Miami, Fl.</span>
            </h1>
            <p className="text-white/70 text-lg">I&apos;m Anthony, a current student at Florida International University (FIU) studying computer science. Currently, I work on the team at FIU&apos;s Applied Research Center as a software developer, primarily focusing on customer-facing solutions. </p>
          </section>

          {/* Projects */}
          <section className="pb-16 pt-10">
            <div className="sticky top-0 z-20 py-5 backdrop-blur lg:relative lg:top-auto lg:w-full">
              <h2 className="font-semibold text-base text-white/90 ">Projects</h2>
            </div>
            <div className="space-y-4 group/projects">

              <div className="flex gap-4 items-center group/project group-hover/projects:opacity-40 group-hover/projects:hover:hover:opacity-100 transition-all duration-300 bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-slate-700">
                <Image alt="placeholder-logo" className="rounded-lg group-hover/project:scale-110 transition-all duration-300" src="/placeholder.png" width={40} height={40} />
                <div className="flex items-center justify-between w-full">
                  <span>
                    <h3 className="text-white font-medium text-base">Orbit</h3>
                    <h3 className="text-white/70 text-sm">A decentralized social media platform.</h3>
                  </span>
                  <div>
                    <FontAwesomeIcon className="text-white/70 opacity-10 group-hover/project:opacity-40 transition-all duration-300" icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center group/project group-hover/projects:opacity-40 group-hover/projects:hover:hover:opacity-100 transition-all duration-300 bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-slate-700">
                <Image alt="placeholder-logo" className="rounded-lg group-hover/project:scale-110 transition-all duration-300" src="/placeholder-3.png" width={40} height={40} />
                <div className="flex items-center justify-between w-full">
                  <span>
                    <h3 className="text-white font-medium text-base">Promptora</h3>
                    <h3 className="text-white/70 text-sm">A place to share and discover AI prompts.</h3>
                  </span>
                  <div>
                    <FontAwesomeIcon className="text-white/70 opacity-10 group-hover/project:opacity-40 transition-all duration-300" icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center group/project group-hover/projects:opacity-40 group-hover/projects:hover:hover:opacity-100 transition-all duration-300 bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-slate-700">
                <Image alt="placeholder-logo" className="rounded-lg group-hover/project:scale-110 transition-all duration-300" src="/placeholder-2.png" width={40} height={40} />
                <div className="flex items-center justify-between w-full">
                  <span>
                    <h3 className="text-white font-medium text-base">Journey</h3>
                    <h3 className="text-white/70 text-sm">A web app making it easy to create iteneries when you&apos;re on vacation.</h3>
                  </span>
                  <div>
                    <FontAwesomeIcon className="text-white/70 opacity-10 group-hover/project:opacity-40 transition-all duration-300" icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <a className="text-white/70 justify-self-end group hover:text-teal-300" href="/projects">
                View All Projects
                <FontAwesomeIcon className="ml-1 group-hover:translate-x-2 transition-all duration-300" icon={faArrowRight} />
              </a>
            </div>
          </section>

          {/* Experience */}
          <section className="pb-16 pt-10">
            <div className="sticky top-0 z-20 py-5 backdrop-blur lg:relative lg:top-auto lg:w-full">
              <h2 className="font-semibold text-base text-white/90">Experience</h2>
            </div>
            <div className="space-y-4 group">

              <div className="grid grid-cols-2 gap-4 transition-all group/experience duration-300 rounded-xl cursor-pointer group-hover:opacity-40 group-hover:hover:opacity-100 hover:bg-slate-600/10 py-4">
                <span className="text-white/30 text-sm uppercase font-semibold group-hover/experience:translate-x-3 transition-all duration-300">2023 -- present <FontAwesomeIcon icon={faClock} className="ml-2 opacity-0 group-hover/experience:opacity-100 transition-all duration-300" /></span>
                <div className="flex flex-col">
                  <span className="text-white group-hover/experience:text-teal-200 ">FIU: Applied Research Center</span>
                  <span className="text-white/40 text-sm">Software Developer Intern</span>
                  <p className="mt-2 text-white/60">Focusing on customer-facing solutions.</p>

                  <div className="flex flex-wrap mt-3">
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">C#</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">.NET</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">React</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">NextJS</div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div>

              <div className="grid grid-cols-2 gap-4 group/experience transition-all duration-300 rounded-xl cursor-pointer group group-hover:opacity-40 group-hover:hover:opacity-100 hover:bg-slate-600/10 py-4">
                <span className="text-white/30 text-sm uppercase font-semibold group-hover/experience:translate-x-3 transition-all duration-300">2023 -- 2023 <FontAwesomeIcon icon={faClock} className="ml-2 opacity-0 group-hover/experience:opacity-100 transition-all duration-300" /></span>
                <div className="flex flex-col">
                  <span className="text-white group-hover/experience:text-teal-200">MDC: School of Science</span>
                  <span className="text-white/40 text-sm">Undergraduate Research Assistant - Physics</span>
                  <p className="mt-2 text-white/60">Worked alongside Dr. Soumia Souchak on the interaction between radio frequencies and photonic band gap materials. Created data visualizations of our findings.</p>

                  <div className="flex flex-wrap mt-3">
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Python</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Matlab</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Pyplot</div>
                  </div>

                </div>
              </div>

              <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div>

              <div className="grid grid-cols-2 gap-4 group/experience transition-all duration-300 rounded-xl cursor-pointer group-hover:opacity-40 group-hover:hover:opacity-100 hover:bg-slate-600/10 py-4">
                <span className="text-white/30 text-sm uppercase font-semibold group-hover/experience:translate-x-3 transition-all duration-300">2022 -- 2023 <FontAwesomeIcon icon={faClock} className="ml-2 opacity-0 group-hover/experience:opacity-100 transition-all duration-300" /></span>
                <div className="flex flex-col">
                  <span className="text-white group-hover/experience:text-teal-200">MDC: Engineering and Technology</span>
                  <span className="text-white/40 text-sm">Computer Science Tutor</span>
                  <p className="mt-2 text-white/60 ">Helping over 200+ students with computer science related courses, leading to increased test scores.</p>

                  <div className="flex flex-wrap mt-3">
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Python</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">Java</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">C</div>
                    <div className="flex items-center bg-teal-400/10 hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">C++</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div>
            </div>

            <div className="flex justify-start mt-6">
              <a className="text-white/70 justify-self-end group hover:text-teal-300" href="/resume.pdf" target="_blank">
                View Full Resume
                <FontAwesomeIcon className="ml-1 group-hover:translate-x-2 transition-all duration-300" icon={faArrowRight} />
              </a>
            </div>
          </section>

          {/* Contact */}
          <div className="flex justify-center">
            <section id="contact" className={`grid grid-cols-2 text-white/90 text-sm group/contact transition-all ${isBouncing ? "animate-shine" : ""}`}>
              <div className="text-white/50 justify-self-start group/email group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <a className="text-white/50 group-hover/email:text-white/90 transition-all" href="mailto:mail@anthonymham.com">mail@anthonymham</a>
              </div>
              <div className=" items-center justify-self-end justify-between text-white/50 group/twitter group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-300">
                <a className="text-white/50 group-hover/twitter:text-white/90 transition-all" href="https://www.twitter.com/a_michaeel">@a_michaeel</a>
                <FontAwesomeIcon icon={faTwitter} className="ml-3" />
              </div>
              <div className=" items-center justify-self-start justify-between text-white/50 group/github group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} className="mr-3" />
                <a className="text-white/50 group-hover/github:text-white/90 transition-all" href="https://www.github.com/amichaeel">git/amichaeel</a>
              </div>
              <div className=" items-center justify-self-end justify-between text-white/50 group/linkedin group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-300">
                <a className="text-white/50 group-hover/linkedin:text-white/90 transition-all" href="https://www.linkedin.com/in/xnthiny">in/xnthiny</a>
                <FontAwesomeIcon icon={faLinkedinIn} className="ml-3" />
              </div>
            </section>
          </div>

          {/* Footer */}
          <section className="py-8 flex items-center text-center justify-center">
            <p className="text-white/50 text-xs">Coded in
              <a className="text-white/80" href="https://code.visualstudio.com/"> Visual Studio Code </a>
              by Anthony Ham. Built with
              <a className="text-white/80" href="https://nextjs.org/"> Next.JS </a>
              and
              <a className="text-white/80" href="https://tailwindcss.com/"> Tailwind CSS</a>
              , deployed with
              <a className="text-white/80" href="https://vercel.com/"> Vercel </a>
              . All text is set in the
              <a className="text-white/80" href="https://typetype.org/fonts/tt-hoves/"> TT Hoves Pro </a>
              typeface.</p>
          </section>
        </main>
      </main>
    </div>
  )
}