import Link from "next/link";
import { loginAction } from "@/lib/actions";
function LoginForm() {
  return (
    <div className=" bg-gray-600 rounded-lg p-8 space-y-8">
      <h2 className="text-4xl font-bold text-center">Sign In</h2>
      <form className="flex flex-col gap-8 w-[500px]" action={loginAction}>
        <input
          className="p-3 rounded-md bg-gray-500 min-w-"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="p-3 rounded-md bg-gray-500 min-w-"
          type="text"
          placeholder="Password"
          name="password"
        />

        <button className="btn btn-primary text-white" type="submit">
          Login
        </button>
      </form>

      <p className="text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-bold text-blue-300">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
