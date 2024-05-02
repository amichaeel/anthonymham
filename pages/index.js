import React, { useState } from "react"
import NextLink from 'next/link'
import { Link as RSLink, Button, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard, faAppleAlt, faArrowDown, faArrowRight, faBook, faDotCircle, faEnvelope, faGraduationCap, faHandPaper, faMessage, faNewspaper, faPen, faPencil, faPencilAlt, faPencilRuler, faPencilSquare, faRss } from "@fortawesome/free-solid-svg-icons"
import { faApple, faGithub, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ExperienceModal from "@/components/ExperienceModal"
import ProjectModal from "@/components/ProjectModal"
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [isBouncing, setIsBouncing] = useState(false)

  const handleBounce = () => {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 1800)
  }

  return (
    <main className="max-w-3xl mx-auto">
      <main className="px-4">
        <section className="pb-16 md:pt-16 pt-10 ">
          <div className="font-semibold mb-4 text-white">
            <div className="flex justify-between">
              <div className="w-fit">
                <span className="text-4xl font-semibold text-slate-200">
                  Anthony Ham
                </span>
                <div className="text-2xl font-normal text-slate-200">
                  <Typewriter
                    options={{
                      strings: ['Software Engineer', "Code Wizard", "Bug Hunter", "Script Sorcerer", "Algorithm Alchemist", "Data Wrangler", "Bit Jockey"],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      pauseFor: 10000
                    }}
                  />
                </div>
              </div>
              <div className="flex md:items-start items-end md:flex-row flex-col md:space-y-0 md:space-x-5 space-y-4">
                <div className="md:text-[20px] md:hover:text-teal-300 transition-all duration-200 text-3xl">
                  <RSLink
                    to="contact"
                    smooth={true}
                    className="cursor-pointer space-x-2 text-slate-200 md:hover:text-teal-300 transition-all duration-200"
                    onClick={handleBounce}
                  ><FontAwesomeIcon icon={faArrowDown} className="text-xs animate-bounce" /><FontAwesomeIcon icon={faAddressCard} /></RSLink>
                </div>
                <div className="text-3xl md:text-[22px]">
                  <NextLink href="/posts" >
                    <FontAwesomeIcon className="text-slate-200" icon={faPen} />
                  </NextLink>
                </div>
              </div>

            </div>
          </div>
          <p className="text-slate-400 text-lg">I&apos;m Anthony, a current student at Florida International University (FIU) studying computer science. Currently, I work on the team at FIU&apos;s Applied Research Center as a software developer, primarily focusing on customer-facing solutions. </p>
        </section>

        {/* Projects */}
        <section className="pb-16">
          <div className="sticky top-0 z-20 py-5 backdrop-blur lg:relative lg:top-auto lg:w-full">
            <h2 className="font-semibold text-base text-white/90 ">Projects</h2>
          </div>
          <div className="space-y-4 group/projects">

            <ProjectModal
              imgSource="/orbit-logo.png"
              title="Orbit"
              description="A decentralized social media platform."
              link="https://orbitchat.vercel.app"
            />
            <ProjectModal
              imgSource="/placeholder-3.png"
              title="FIU Rooms"
              description="A place for students to find open classrooms at FIU."
              link="https://fiu-rooms.vercel.app"
            />
            <ProjectModal
              imgSource="/placeholder-2.png"
              title="Journey"
              description="A web app making it easy to create itineraries when you&apos;re on vacation."
            />
          </div>

          <div className="flex justify-start mt-6">
            <NextLink className="text-white/70 justify-self-end group font-light hover:text-teal-300" href="/projects">
              View All Projects
              <FontAwesomeIcon className="ml-1 group-hover:-rotate-45 transition-all duration-200" icon={faArrowRight} />
            </NextLink>
          </div>

        </section>

        {/* Experience */}
        <section className="pb-16 pt-10">
          <div className="sticky top-0 z-20 py-5 backdrop-blur lg:relative lg:top-auto lg:w-full">
            <h2 className="font-semibold text-base text-white/90">Experience</h2>
          </div>
          <div className="space-y-4 group">
            <ExperienceModal
              location="State Farm"
              position="Software Engineer Intern"
              description="Centralized Modeling Platform (CMP) Engineering Team"
              timeWorked="2024 -- present"
              technologies={["AWS", "Python", "Terraform", "SageMaker", "Canvas", "Scalr", "Forecast", "React"]}
            />
            {/* <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div> */}
            <ExperienceModal
              location="FIU: Applied Research Center"
              position="Software Developer Intern"
              description="Built web applications used in production by the DOT&E, inlcuding an application responsible for hosting their AI/ML services playground."
              timeWorked="2023 -- 2024"
              technologies={["C#", ".NET", "Blazor", "React", "Next.JS", "HTML", "CSS"]}
            />
            {/* <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div> */}
            <ExperienceModal
              location="MDC: School of Science"
              position="Undergraduate Research Assistant - Physics"
              description="Worked alongside Dr. Soumia Souchak on the interaction between radio frequencies and photonic band gap materials. Created data visualizations of our findings."
              timeWorked="2023 -- 2023"
              technologies={["Python", "Matlab", "Pyplot"]}
            />
            {/* <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div> */}
            <ExperienceModal
              location="MDC: School of Engineering and Technology"
              position="Computer Science Tutor"
              description="Helped 200+ students with computer science related courses, leading to increased test scores."
              timeWorked="2022 -- 2023"
              technologies={["Python", "Java", "C", "C++"]}
            />
            {/* <div className="w-full bg-slate-400/10 rounded-3xl h-1 z-23"></div> */}
          </div>

          <div className="flex justify-start mt-6">
            <a className="text-white/70 justify-self-end group hover:text-teal-300" href="/resume.pdf" target="_blank">
              View Full Resume
              <FontAwesomeIcon className="ml-1 group-hover:-rotate-45 transition-all duration-200" icon={faArrowRight} />
            </a>
          </div>
        </section>

        {/* Academic Programs */}
        <section className="pb-16 pt-10">
          <div className="sticky top-0 z-20 py-5 backdrop-blur-sm lg:relative lg:top-auto lg:w-full">
            <h2 className="font-semibold text-base text-white/90">Academic Programs</h2>
          </div>

          <div className="group">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

              <div className="cursor-default flex gap-4 lg:group-hover:opacity-30 lg:group-hover:hover:opacity-100 bg-slate-800 lg:hover:bg-slate-700 lg:w-full rounded-xl text-white transition-all duration-200">
                <div className="p-3 group/title">
                  <div className="flex items-center space-x-2 justify-start mb-2">
                    <div className="text-slate-200 items-center text-4xl">
                      <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <span className="font-normal">Google Tech Exchange</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-normal">Status: Completed</span>
                    <span className="text-sm font-light text-white/80">Spending a semester with Google, taking courses such as Applied Data Structures and Software Development Studio. Additionally, I am being mentored by a Google software engineer, providing insights into the tech industry and enhancing my skills.</span>
                    <a className="text-white/70 font-thin text-sm lg:hover:text-teal-300 transition-all w-fit duration-200 group/link" target="_blank" href="https://buildyourfuture.withgoogle.com/programs/tech-exchange">
                      Visit Program Website <FontAwesomeIcon className="lg:group-hover/link:-rotate-45 transition-transform duration-200" icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="cursor-default flex gap-4 lg:group-hover:opacity-30 lg:group-hover:hover:opacity-100 bg-slate-800 lg:hover:bg-slate-700 w-full rounded-xl text-white transition-all duration-200">
                <div className="p-3">
                  <div className="flex items-center space-x-2 justify-start mb-2">
                    <div className="text-white/70 items-center text-4xl">
                      <FontAwesomeIcon icon={faApple} />
                    </div>
                    <span className="font-normal">Apple Pathways Alliance</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-normal">Status: Active <FontAwesomeIcon icon={faDotCircle} className="animate-pulse text-green-300" /></span>
                    <span className="text-sm font-light text-white/80">A year long program with Apple, where I am actively being micro-mentored by Apple employees, attending internal workshops to improve technical and professional skills, and have access to an internal resource database to further develop my skills.</span>
                    <a className="text-white/70 font-thin text-sm lg:hover:text-teal-300 transition-all w-fit duration-200 group/link" target="_blank" href="https://www.apple.com/racial-equity-justice-initiative/pdf/2023-Impact-Overview.pdf">
                      Visit Program Website <FontAwesomeIcon className="lg:group-hover/link:-rotate-45 transition-transform duration-200" icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="cursor-default md:col-span-2 flex gap-4 lg:group-hover:opacity-30 lg:group-hover:hover:opacity-100 bg-slate-800 lg:hover:bg-slate-700 w-full rounded-xl text-white transition-all duration-200">
                <div className="p-3">
                  <div className="flex items-center space-x-2 justify-start mb-2">
                    <div className="text-white/70 items-center text-4xl">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <span className="font-normal">FLIT-Gap Scholarship</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-normal">Status: Active <FontAwesomeIcon icon={faDotCircle} className="animate-pulse text-green-300" /></span>
                    <span className="text-sm font-light text-white/80">
                      Selected as one of 50 scholars in the prestigious S-STEM Flit-GAP project across FIU, UCF, and USF, I gained specialized training in computing disciplines like Computer Science and Cybersecurity. The program provided me with scholarships, mentorship, and unique opportunities in research, internships, and entrepreneurship, enhancing my professional and academic skills.</span>
                    <a className="text-white/70 font-thin text-sm lg:hover:text-teal-300 transition-all w-fit duration-200 group/link" target="_blank" href="https://flit-gap.org/">
                      Visit Program Website <FontAwesomeIcon className="lg:group-hover/link:-rotate-45 transition-transform duration-200" icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="flex justify-center">
          <section id="contact" className={`grid grid-cols-2 text-white/90 text-sm group/contact transition-all ${isBouncing ? "animate-shine" : ""}`}>
            <div className="text-white/50 font-light justify-self-start group/email group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-200">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <a className="text-white/50 group-hover/email:text-white/90 transition-all" href="mailto:mail@anthonymham.com">mail@anthonymham</a>
            </div>
            <div className=" items-center font-light justify-self-end justify-between text-white/50 group/twitter group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-200">
              <a className="text-white/50 group-hover/twitter:text-white/90 transition-all" href="https://www.twitter.com/a_michaeel">@a_michaeel</a>
              <FontAwesomeIcon icon={faTwitter} className="ml-3" />
            </div>
            <div className=" items-center font-light  justify-self-start justify-between text-white/50 group/github group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-200">
              <FontAwesomeIcon icon={faGithub} className="mr-3" />
              <a className="text-white/50 group-hover/github:text-white/90 transition-all" href="https://www.github.com/amichaeel">git/amichaeel</a>
            </div>
            <div className=" items-center font-light justify-self-end justify-between text-white/50 group/linkedin group-hover/contact:hover:opacity-100 group-hover/contact:opacity-60 transition-all duration-200">
              <a className="text-white/50 group-hover/linkedin:text-white/90 transition-all" href="https://www.linkedin.com/in/xnthiny">in/xnthiny</a>
              <FontAwesomeIcon icon={faLinkedinIn} className="ml-3" />
            </div>
          </section>
        </div>

        {/* Footer */}
        <section className="py-8 flex items-center text-center justify-center">
          <p className="text-slate-300/70 font-light text-xs">Coded in
            <a className="text-slate-200 hover:text-teal-300 transition-all duration-200" href="https://code.visualstudio.com/"> Visual Studio Code </a>
            by Anthony Ham. Built with
            <a className="text-slate-200 hover:text-teal-300 transition-all duration-200" href="https://nextjs.org/"> Next.JS </a>
            and
            <a className="text-slate-200 hover:text-teal-300 transition-all duration-200" href="https://tailwindcss.com/"> Tailwind CSS</a>
            , deployed with
            <a className="text-slate-200 hover:text-teal-300 transition-all duration-200" href="https://vercel.com/"> Vercel </a>
            . All text is set in the
            <a className="text-slate-200 hover:text-teal-300 transition-all duration-200" href="https://typetype.org/fonts/tt-hoves/"> TT Hoves Pro </a>
            typeface.</p>
        </section>
      </main>
    </main>
  )
}