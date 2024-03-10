import Otpscreen from "../../src/app/components/OTPScreen";
import "../../src/app/globals.css";

export default function AccountVerificationOTP() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      <Otpscreen />
    </main>
  );
}
