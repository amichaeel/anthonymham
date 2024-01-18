import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MdxLayout({ children }) {
  const router = useRouter();
  return (
    <div className="max-w-3xl mx-auto text-slate-200 min-h-screen">
      <div className="px-4">
        <header className="pt-16 pb-16 flex justify-between">
          <div onClick={() => router.push("/posts")} className="md:hover:text-teal-300 group cursor-pointer">
            <FontAwesomeIcon className="md:text-xs text-2xl ml-1 lg:group-hover:rotate-45 transition-transform duration-200" icon={faArrowLeft} />
            <span href="/posts" className="lg:hover:text-teal-300 group cursor-pointer hidden md:inline transition-all duration-200"> View All Posts</span>
          </div>
          <Link href="/" className="lg:hover:text-teal-300 cursor-pointer transition-all duration-200"><FontAwesomeIcon className="text-2xl md:text-xl" icon={faHome} /></Link>
        </header>
        <div className="prose prose-invert max-w-3xl mb-24 font-light prose-headings:font-semibold">
          {children}
        </div>
      </div>
    </div>
  )
}