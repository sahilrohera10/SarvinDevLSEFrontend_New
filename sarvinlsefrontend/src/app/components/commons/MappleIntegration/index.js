import { useEffect } from "react";

const HyperLocalSearch = () => {
  useEffect(() => {
    // Map Initialization
    function initMap1() {
      const map = new window.mappls.Map("map", {
        center: [28.09, 78.3],
        zoom: 5,
      });
      map.addListener("load", function () {
        const optional_config = {
          region: "IND",
          hyperLocal: true,
        };
        new window.mappls.search(
          document.getElementById("auto"),
          optional_config,
          callback
        );
        function callback(data) {
          console.log(data);
          if (data) {
            const dt = data[0];
            if (!dt) return false;
            const eloc = dt.eLoc;
            const place = dt.placeName + ", " + dt.placeAddress;
            // Use elocMarker Plugin to add marker
            let marker;
            window.mappls.pinMarker(
              {
                map: map,
                pin: eloc,
                popupHtml: place,
                popupOptions: {
                  openPopup: true,
                },
              },
              function (data) {
                marker = data;
                marker.fitbounds();
              }
            );
          }
        }
      });
    }

    // Load Map SDK script dynamically
    const script = document.createElement("script");
    script.src = `https://apis.mappls.com/advancedmaps/api/<Token>/map_sdk?layer=vector&v=3.0&callback=initMap1`;
    script.async = true;
    document.body.appendChild(script);

    // Load Map SDK Plugins script dynamically
    const pluginsScript = document.createElement("script");
    pluginsScript.src = `https://apis.mappls.com/advancedmaps/api/<token>/map_sdk_plugins?v=3.0`;
    pluginsScript.async = true;
    document.body.appendChild(pluginsScript);

    // Clean up
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(pluginsScript);
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
      <input
        type="text"
        id="auto"
        name="auto"
        className="search-outer form-control as-input"
        placeholder="Search places or eLoc's..."
        required=""
        spellCheck={false}
        style={{
          width: "300px",
          position: "absolute",
          zIndex: "999",
          fontSize: "15px",
          padding: "10px",
          border: "1px solid #ddd",
          outline: "none !important",
          top: "5px",
          borderRadius: "10px",
          margin: "4px",
        }}
      />
    </div>
  );
};

export default HyperLocalSearch;
