import React from "react";
import ProjectTable from "@/components/ProjectTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";

export default function projects() {
  return (
    <main className="max-w-6xl mx-auto min-h-screen">
      <header className="flex flex-col text-white/70 pt-16 px-4">
        <div>
        <NextLink href="/" className="text-md sm:text-lg group text-teal-300 cursor-pointer"><FontAwesomeIcon className="mr-2 group-hover:-translate-x-3 transition-all duration-300" icon={faArrowLeft} /> Anthony Ham</NextLink>
        </div>
        <h3 className="text-5xl font-bold mt-2 lg:text-4xl">All Projects</h3>
      </header>
      <section className="animate-fadeIn px-3">
        <ProjectTable />
      </section>
    </main>
  )
}