import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export default function ProjectModal({title, imgSource, description}) {
  return (
    <div className="flex gap-4 items-center group/project lg:group-hover/projects:opacity-40 lg:group-hover/projects:hover:hover:opacity-100 transition-all duration-300 bg-slate-800 rounded-xl p-5 cursor-default lg:hover:bg-slate-700">
      <Image alt="placeholder-logo" className="rounded-lg lg:group-hover/project:scale-110 transition-all duration-300" src={imgSource} width={40} height={40} />
      <div className="flex items-center justify-between w-full">
        <span>
          <h3 className="text-white font-medium text-base">{title}</h3>
          <h3 className="text-white/70 text-sm">{description}</h3>
        </span>
        <div>
          <FontAwesomeIcon className="text-white/70 opacity-10 lg:group-hover/project:opacity-40 transition-all duration-300" icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  )
}