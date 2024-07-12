import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Link href={"/list-item"}>Iteractive list of item </Link>
      <Link href={"/vercel-tabs"}>Табы как у Vercel</Link>
    </div>
  );
}
