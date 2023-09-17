import Link from "next/link";

export default function Page() {
  return <>
    <h1>New</h1>
    <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Back</Link>
  </>
}
