import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {[
          { href: "about", label: "About" },
          { href: "experience", label: "Experience" },
          { href: "projects", label: "Projects" }
        ].map((item) => (
          <li key={item.href}>
            <ScrollLink
              to={item.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
              activeClass="active"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                {item.label}
              </span>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;