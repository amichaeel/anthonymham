import React, { useState } from "react"
import Link from "next/link";
import { FaApple, FaEnvelope, FaEye, FaGithub, FaGoogle, FaGraduationCap, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import JobExperienceCard from "@/components/JobExperienceCard";
import Navigation from "@/components/Navigation";

export default function Home() {

  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <Link href="/">Anthony Ham</Link>
            </h1>
            <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
            <p class="mt-4 max-w-xs leading-normal text-slate-400">I build accessible, pixel-perfect digital experiences for the web.</p>
            <Navigation />
          </div>
          <ul className="ml-1 mt-8 flex items-center text-slate-500">
            <li class="mr-5 shrink-0 text-xs">
              <a class="block hover:text-slate-200" href="https://github.com/amichaeel" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span class="sr-only">GitHub</span>
                <FaGithub size={24} />
              </a>
            </li>
            <li class="mr-5 shrink-0 text-xs">
              <a class="block hover:text-slate-200" href="https://linkedin.com/in/xnthiny" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                <span class="sr-only">LinkedIn</span>
                <FaLinkedin size={24} />
              </a>
            </li>
            <li class="mr-5 shrink-0 text-xs">
              <a class="block hover:text-slate-200" href="https://instagram.com/anthxnyham" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram">
                <span class="sr-only">Instagram</span>
                <FaInstagram size={28} />
              </a>
            </li>
            <li class="mr-5 shrink-0 text-xs">
              <a class="block hover:text-slate-200" href="mailto:mail@anthonymham.com" target="_blank" rel="noreferrer noopener" aria-label="E-mail (opens mail client)" title="E-mail">
                <span class="sr-only">E-mail</span>
                <FaEnvelope size={28} />
              </a>
            </li>
          </ul>
        </header>

        <main className="pt-24 lg:w-[52%] lg:py-24">
          <section id='about' aria-label="About me" className="mb-16 text-slate-500 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div>
              <p className="mb-4">I&apos;m a software engineer passionate about designing and building robust and accessible full-stack software products. I find myself always striving to learn new things and apply it to the work that I do. Ultimately, my joy lies in creating expereinces that not only look great but are meticulously built for performance and usability.</p>
              <p className="mb-4">Currently, I am a senior at
                <Link target="_blank" href="https://fiu.edu" className=" text-slate-300 text-sm hover:text-teal-300 focus-visible:text-teal-300 mx-2">Florida International University</Link>
                studying Computer Science. Additionally, I am currently a Software Engineer Intern at
                <Link target="_blank" href="https://statefarm.com" className=" text-slate-300 text-sm hover:text-teal-300 focus-visible:text-teal-300 ml-2">State Farm</Link>,
                where I am responsible for scaling and maintaining the AWS infrastructure used by ML/AI engineers. I will also be joining
                <Link target="_blank" href="https://aws.amazon.com" className=" text-slate-300 text-sm hover:text-teal-300 focus-visible:text-teal-300 mx-2">AWS</Link>
                as a Front End Engineer Intern in 2025.</p>
            </div>
          </section>

          <section id='experience' aria-label="About me" className="mb-16 text-slate-500 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-slate-300">Experience</h2>
            </div>
            <div>
              <ol className="group/list">
                <JobExperienceCard
                  timeFrame={"2025"}
                  jobTitle="Front End Engineer Intern"
                  company={"AWS"}
                  description={"Starting 2025"}
                  companyLink={"https://aws.amazon.com"}
                />
                <JobExperienceCard
                  timeFrame={"2024 — Present"}
                  jobTitle="Software Engineer Intern"
                  company={"State Farm"}
                  description={"Build and maintain the AWS infrastructure utilized by ML/AI engineers across all of State Farm. Work closely with machine learning and data scientist in an agile environment, improving and reiterating the AWS infrastructure to meet their needs."}
                  companyLink={"https://statefarm.com"}
                  technologies={["Terraform", "TypeScript", "Python", "AWS Lambda", "AWS SageMaker", "Bash", "Java"]} />

                <JobExperienceCard
                  timeFrame={"2023 — 2024"}
                  jobTitle="Software Engineer Intern"
                  company={"FIU: Applied Research Center"}
                  description={"Work closely with the DOT&E and DOE, providing full-stack software products to showcase the machine learning and artificial intelligence capabilities our research center is developing."}
                  companyLink={"https://arc.fiu.edu"}
                  technologies={["C#", ".NET", "Blazor", "TypeScript", "React", "C++"]} />

                <JobExperienceCard
                  timeFrame={"JAN — APRIL 2023"}
                  jobTitle="Undergraduate Researcher"
                  company={"National Science Foundation"}
                  description={"Work closely with the DOT&E and DOE, providing full-stack software products to showcase the machine learning and artificial intelligence capabilities our research center is developing."}
                  companyLink={"https://statefarm.com"}
                  technologies={["Python", "Matlab", "Pyplot"]} />

                <JobExperienceCard
                  timeFrame={"2022 — 2023"}
                  jobTitle="Computer Science Tutor"
                  company={"MDC School of Engineering and Technology"}
                  description={"Worked with over 200 computer science students in teaching and assisting with their coursework and assignments."}
                  companyLink={"https://statefarm.com"}
                  technologies={["Java", "Python", "C", "C++"]} />

              </ol>
              <div className="mt-12">
                <Link href="/resume.pdf" className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base">
                  <span>View Full Resume</span>
                </Link>
              </div>
            </div>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-slate-300">Projects</h2>
            </div>
            <div>
              <ul className="group/list">

                <li className="mb-24">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <Link target="_blank" href="https://scout-silk.vercel.app" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Scout</span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        A centralized platform to find tech internships. Scrapes mutliple GitHub repositories to get the latest listings.
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {["TypeScript", "React", "NextJS"].map((tech, index) => (
                          <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image alt="Scout" loading="lazy" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" width={200} height={48} src="/scout-sc.png"></Image>
                  </div>
                </li>

                <li className="mb-24">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <Link target="_blank" href="https://greenline-ruddy.vercel.app/" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Greenline</span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        Combining stocks and machine learning for insights and forecasts.
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {["TypeScript", "React", "NextJS", "Python", "Prophet", "FastAPI", "Polygon API"].map((tech, index) => (
                          <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image alt="Greenline" loading="lazy" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" width={200} height={48} src="/greenline-sc.png"></Image>
                  </div>

                </li>

                <li className="mb-24">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <Link target="_blank" href="https://fiu-rooms.vercel.app" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>FIU Rooms</span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        A place for students to find open classrooms at FIU.
                      </p>
                      <p className="mt-2 text-sm leading-normal text-slate-300">
                        <span className="flex items-center gap-2">
                          <FaEye />
                          3000+ Monthly Visitors
                        </span>
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {["TypeScript", "React", "NextJS", "MongoDB"].map((tech, index) => (
                          <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image alt="FIU Rooms" loading="lazy" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" width={200} height={48} src="/fiurooms-sc.png"></Image>
                  </div>
                </li>

                <li className="mb-24">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <Link target="_blank" href="https://orbitchat.vercel.app/" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Orbit</span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        Create communities and talk about something interesting.
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {["TypeScript", "React", "NextJS", "MongoDB"].map((tech, index) => (
                          <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image alt="Orbit" loading="lazy" className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" width={200} height={48} src="/orbit-sc.png"></Image>
                  </div>
                </li>


              </ul>
              <div className="mt-12">
                <Link href="/projects" className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base">
                  <span>View Full Project Archive</span>
                </Link>
              </div>
            </div>
          </section>

          <section id="academic-programs" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-slate-300">Academic Programs</h2>
            </div>
            <div>

              <ul className="group/list">

                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:col-span-8 text-slate-300">
                      <div className="flex items-center justify-between space-x-4" >
                        <div className="flex items-center space-x-4">
                          <FaGoogle size={32} />
                          <span>Google Tech Exchange</span>
                        </div>
                        <div>
                          <span>Complete</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        Spent a semester with Google, taking courses such as Applied Data Structures and Software Development Studio. Additionally, I am being mentored by a Google software engineer, providing insights into the tech industry and enhancing my skills.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:col-span-8 text-slate-300">
                      <div className="flex items-center justify-between space-x-4" >
                        <div className="flex items-center space-x-4">
                          <FaGraduationCap size={32} />
                          <span>FLIT-Gap Scholarship</span>
                        </div>
                        <div>
                          <span className="text-sm">Active</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        Selected as one of 50 scholars in the prestigious S-STEM Flit-GAP project across FIU, UCF, and USF, I gained specialized training in computing disciplines like Computer Science and Cybersecurity. The program provided me with scholarships, mentorship, and unique opportunities in research, internships, and entrepreneurship, enhancing my professional and academic skills.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:col-span-8 text-slate-300">
                      <div className="flex items-center justify-between space-x-4" >
                        <div className="flex items-center space-x-4">
                          <FaApple size={32} />
                          <span>Apple Pathways Alliance</span>
                        </div>
                        <div>
                          <span>Active</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        A year long program with Apple, where I am actively being micro-mentored by Apple employees, attending internal workshops to improve technical and professional skills, and have access to an internal resource database to further develop my skills.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <div className="z-10 sm:col-span-8 text-slate-300">
                      <div className="flex items-center justify-between space-x-4" >
                        <div className="flex items-center space-x-4">
                          <div className="text-white/70 items-center text-4xl">
                            <svg
                              fill="#000"
                              height="32px"
                              width="32px"
                              version="1.1"
                              id="Icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              enableBackground="new 0 0 24 24"
                              xmlSpace="preserve"
                              className="invert opacity-70"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                <path d="M18.18,10.89C19,10.42,21,9.88,21,5.94C21,0.28,14.45,0,14.45,0H2v24c0,0,8.28,0,13.03,0c4.41,0,6.99-2.93,6.99-7.2 C22.02,12.73,19.1,11.47,18.18,10.89z M8,5h4.56c0,0,1.75,0.13,1.75,1.98c0,1.85-1.23,2.02-1.75,2.02S8,9,8,9V5z M13.17,19 C12.57,19,8,19,8,19v-5h5.17c0,0,2.06,0.1,2.06,2.48C15.23,18.51,13.76,19,13.17,19z"></path>
                              </g>
                            </svg>
                          </div>
                          <span>Bloomberg Engineering Accelerator</span>
                        </div>
                        <div>
                          <span>Complete</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-normal text-slate-500">
                        This program, led by Bloomberg Engineering, provided me with valuable insights into the technical interview process and the Bloomberg Engineering Culture. BASS will cover a range of topics including data structures and algorithms, problem-solving and patterns, and the opportunity to attend office hours with Bloomberg engineers.
                      </p>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </section>
        </main>

      </div>
    </main>
  )
}