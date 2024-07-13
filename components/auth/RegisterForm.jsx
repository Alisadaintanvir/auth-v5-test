import Link from "next/link";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";
import { registrationAction } from "@/lib/actions";

function RegisterForm() {
  return (
    <div className=" bg-gray-600 rounded-lg p-8 space-y-8">
      <h2 className="text-4xl font-bold text-center">Sign In</h2>
      <form
        action={registrationAction}
        className="flex flex-col gap-8 w-[500px]"
      >
        <input
          className="p-3 rounded-md bg-gray-500 min-w-"
          type="text"
          placeholder="Name"
          name="name"
        />
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
        <input
          className="p-3 rounded-md bg-gray-500 min-w-"
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        <button className="btn btn-primary text-white" type="submit">
          Register
        </button>
      </form>

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-blue-300">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
