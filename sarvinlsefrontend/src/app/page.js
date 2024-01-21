import Image from "next/image";
import MapIntegration from "./components/MapIntegration";
import Filters from "./components/Filters";
import EmbedMap from "./components/EmbedMap";
import GlobalSearch from "./components/GlobalSearch";

export default function Home() {
  return (
    <main>
      {/* <MapIntegration /> */}
      {/* <EmbedMap /> */}
      <Filters />
      {/* <GlobalSearch /> */}
    </main>
  );
}
