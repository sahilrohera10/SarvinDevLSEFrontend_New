import SignUp from "../../src/app/components/SignUpInfluencers";
import "../../src/app/globals.css";

export default function signup() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      <SignUp />
    </main>
  );
}
