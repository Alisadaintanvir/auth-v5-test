import Link from "next/link";
import { auth } from "@/auth";
import { logoutAction } from "@/lib/actions";

async function Header() {
  const session = await auth();

  return (
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Authentication</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/protected">Protected</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        {!session ? (
          <>
            <Link href="/login" className="btn btn-sm bg-purple-500 text-white">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm">
              Sign Up
            </Link>
          </>
        ) : (
          <form action={logoutAction}>
            <button className="btn btn-sm " type="submit">
              Logout
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;
