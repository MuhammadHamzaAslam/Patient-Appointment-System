import { Button } from "@/components/ui/button";
import { signIn } from "../../../auth";

export default async function Login() {
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
