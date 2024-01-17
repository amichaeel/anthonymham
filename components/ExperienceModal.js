import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons"

export default function ExperienceModal({location, position, description, timeWorked, technologies, link}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 transition-all group/experience duration-300 rounded-xl lg:cursor-pointer cursor-default lg:group-hover:opacity-40 lg:group-hover:hover:opacity-100 lg:hover:bg-slate-600/10 py-4">
      <span className="text-white/30 text-sm uppercase font-normal lg:group-hover/experience:translate-x-3 transition-all duration-300">{timeWorked} <FontAwesomeIcon icon={faClock} className="ml-2 opacity-0 lg:group-hover/experience:opacity-100 transition-all duration-300" /></span>
      <div className="flex flex-col">
        <span className="text-white lg:group-hover/experience:text-teal-300 ">{location} <FontAwesomeIcon className="text-xs ml-1 lg:group-hover/experience:-rotate-45 transition-transform duration-300" icon={faArrowRight} /></span>
        <span className="text-white/40 font-light text-sm">{position}</span>
        <p className="mt-2 font-thin text-white/60">{description}</p>

        <div className="flex flex-wrap mt-3">
          {technologies.map((value, index) => {
            return (
              <div key={index} className="flex items-center bg-teal-400/10 lg:hover:bg-teal-400/20 transition-all text-teal-300 text-xs w-min px-3 py-2 leading-5 rounded-full mr-1.5 mt-2">{value}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}