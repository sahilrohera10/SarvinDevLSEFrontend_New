import InfluencerDashboard from "../../src/app/components/InfluencerDashboard";
import "../../src/app/globals.css";

export default function AccountVerification() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      <InfluencerDashboard />
    </main>
  );
}
