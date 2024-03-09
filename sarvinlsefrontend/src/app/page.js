import Image from "next/image";
import MapIntegration from "./components/commons/MapIntegration";
import Filters from "./components/commons/Filters";
import EmbedMap from "./components/commons/EmbedMap";
import GlobalSearch from "./components/commons/GlobalSearch";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/commons/Navbar";
import SignUp from "./components/SignUpInfluencers";
import SignIn from "./components/SignIn";
import Verification from "./components/Verification";
import OTPScreens from "./components/OTPScreen";
import Profile from "./components/Profile";
import Pricing from "./components/Pricing";
import InfluencerDashboard from "./components/InfluencerDashboard";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9ff",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: "100vh",
      }}
    >
      {/* <Dashboard /> */}
      <SignIn />
      {/* <SignUp /> */}
      {/* <Verification /> */}
      {/* <OTPScreens /> */}
      {/* <Profile /> */}
      {/* <Pricing /> */}
      {/* <InfluencerDashboard /> */}
    </main>
  );
}
