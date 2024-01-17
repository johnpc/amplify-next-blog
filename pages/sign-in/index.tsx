import { withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

function SignInPage() {
  const router = useRouter();
  router.push("/admin");
  fetch("/api/users/me");
  return <>Logging in...</>;
}

export default withAuthenticator(SignInPage);
