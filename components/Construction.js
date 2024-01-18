import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

export default function ComingSoon() {
  return (
    <div className="text-white w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex text-2xl items-center space-x-5">
          <FontAwesomeIcon icon={faTools} />
          <div className="text-4xl font-thin w-[0.1px] bg-slate-200/30 h-12">
          </div>
          <span className="text-sm">This page is under construction</span>
        </div>
      </div>
    </div>
  )
}