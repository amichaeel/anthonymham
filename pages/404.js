import Error from "next/error";

export default function Page() {
  return (
    <div className="bg-slate-900">
      <Error statusCode={404} withDarkMode={true} />
    </div>
  );
}