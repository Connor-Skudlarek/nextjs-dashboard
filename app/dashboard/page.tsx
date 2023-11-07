import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Dashboard Page</p>
      <Link href="/dashboard/invoices" passHref>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Invoices
        </button>
      </Link>
    </div>
  );
}
