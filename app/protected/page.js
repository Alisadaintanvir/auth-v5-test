import { auth } from "@/auth";
async function ProtectedPage() {
  const session = await auth();
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold">
          {session ? "You are logged in" : "You are not logged in"}
        </h1>
      </div>
    </>
  );
}

export default ProtectedPage;
