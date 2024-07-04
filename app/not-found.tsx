import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col p-8 gap-4">
      <h2 className="text-2xl font-bold leading-7 text-pink-500 sm:truncate sm:text-3xl sm:tracking-tight text-center">
        404
      </h2>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">
        Page Not Found
      </h2>
      <p className="text-center">
        Let’s go back to home :{" "}
        <Link href="/" className="text-pink-500 hover:underline ml-1">
          Go home
        </Link>
      </p>
    </div>
  );
}
