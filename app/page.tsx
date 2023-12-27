import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <div className="text-center">My own portfolio</div> */}
      <nav>
        <ul className="flex justify-around mt-12">
          <li>
            <Link
              href="#"
              className="bg-slate-500 p-2 rounded-md hover:bg-slate-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-slate-500 p-2 rounded-md hover:bg-slate-800"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-slate-500 p-2 rounded-md hover:bg-slate-800"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-slate-500 p-2 rounded-md hover:bg-slate-800"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
