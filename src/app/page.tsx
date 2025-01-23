import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <Link href="/login">
        <button className="px-4 py-2 bg-black text-white rounded mt-4 font-semibold">
          Go to ADMS system
        </button>
      </Link>
    </div>
  );
}
