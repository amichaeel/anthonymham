import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function APModal({name, status, description, website, logo}) {
  return (
    <div className="flex gap-4 group-hover:opacity-30 group-hover:hover:opacity-100 hover:bg-slate-600/10 w-full rounded-xl text-white transition-all duration-300">
    <div className="p-3">
      <div className="flex items-center space-x-4 justify-start mb-2">
        <div className="text-white/70 items-center text-4xl">
          <FontAwesomeIcon icon={logo} />
        </div>
        <span className="font-bold">{name}</span>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-xs font-bold">Status: {status} <FontAwesomeIcon icon={faDotCircle} className="animate-pulse text-green-300" /></span>
        <span className="text-sm text-white/80">{description}</span>
        <a className="hover:text-teal-300 transition-all duration-300 group/link" target="_blank" href={website}>
          Visit Program Website <FontAwesomeIcon className="group-hover/link:translate-x-2 transition-all duration-300" icon={faArrowRight} />
          </a>
      </div>
    </div>
  </div>
  )
}