import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink, faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import Papa from "papaparse";
import { RingLoader } from "react-spinners";



export default function ProjectTable() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getprojects');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            setProjects(results.data);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {projects.length > 0 ? (
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-normal text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-normal text-slate-200">Project</th>
              <th className="py-4 pr-8 text-sm font-normal text-slate-200 hidden lg:table-cell">Made at</th>
              <th className="py-4 pr-8 text-sm font-normal text-slate-200 hidden lg:table-cell">Built with</th>
              <th className="py-4 pr-8 text-sm font-normal text-slate-200 hidden md:table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-slate-300/10 last:border-none transition-all duration-300 rounded hover:bg-slate-500/10">
                <td className="py-4 pr-4 font-light align-top text-sm text-slate-400">
                  {project.Year}
                </td>
                <td className="py-4 pr-4 align-top leading-snug text-slate-200 font-normal">
                  <div className="sm:inline md:hidden">
                    {project.Link ? (
                      <a href={`https://${project.Link}`}>{project.Project} <FontAwesomeIcon className="text-xs ml-2" icon={faArrowRight} /></a>
                    ) : (
                      <span>{project.Project}</span>
                    )}
                  </div>
                  <div className="md:inline hidden">
                    {project.Project}
                  </div>
                </td>
                <td className="hidden lg:table-cell font-thin py-4 pr-4 align-top leading-snug text-slate-200/70 text-sm">
                  {project["Made at"]}
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {project["Built with"].split(",").map((tech, techIndex) => (
                      <li key={techIndex} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-light leading-5 text-teal-300">
                          {tech.trim()}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 align-top hidden md:table-cell">
                  {project.Link && (
                    <a target="_blank" href={`https://${project.Link}`} className="inline-flex items-baseline font-medium leading-tight text-sm text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">
                      <span>
                        <span className="inline-block font-normal cursor-pointer transition-all duration-300 group">
                          {project.Link} <FontAwesomeIcon className="hidden md:inline ml-1 text-xs group-hover:-rotate-45 transition-transform duration-200" icon={faArrowRight} />
                        </span>
                      </span>
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col mt-[200px] items-center justify-center min-w-screen min-h-fit opacity-50">
          <RingLoader
            color="white"
            loading={true}
          />
        </div>
      )}
    </>
  )
}