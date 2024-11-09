import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();

  // if (session) redirect("/");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit">Signin with Google</Button>
      </form>
    </div>
  );
}
