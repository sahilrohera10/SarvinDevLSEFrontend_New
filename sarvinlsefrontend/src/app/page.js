import Image from "next/image";
import MapIntegration from "./components/commons/MapIntegration";
import Filters from "./components/commons/Filters";
import EmbedMap from "./components/commons/EmbedMap";
import GlobalSearch from "./components/commons/GlobalSearch";

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
