import Image from "next/image";
import MapIntegration from "./components/commons/MapIntegration";
import Filters from "./components/commons/Filters";
import EmbedMap from "./components/commons/EmbedMap";
import GlobalSearch from "./components/commons/GlobalSearch";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/commons/Navbar";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#f8f9ff" }}>
      <Dashboard />
    </main>
  );
}
