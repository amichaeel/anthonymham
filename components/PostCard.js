import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router"

export default function PostCard({ title, date, description, slug }) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`posts/${slug}`)} className="group/post md:group-hover/posts:opacity-60 md:group-hover/posts:hover:opacity-100 gap-5 transition w-full grid grid-cols-1 md:grid-cols-2 my-6 p-2 cursor-pointer rounded-xl">
      <div className="">
        <time className="text-slate-200/60 text-sm">{date}</time>
      </div>
      <div>
        <a href={`posts/${slug}`}>
          <div className="transition flex flex-row items-center space-x-2">
            <h2 className="font-semibold text-3xl text-slate-200 group-hover/post:text-teal-300 transition">{title}</h2>
            <FontAwesomeIcon className="text-slate-200 text-sm group-hover/post:-rotate-45 group-hover/post:text-teal-300 transition" icon={faArrowRight} />
          </div>
        </a>
        <p className="text-slate-200 font-thin">{description}</p>
      </div>
    </div>
  );
}