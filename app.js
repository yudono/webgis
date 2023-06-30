function getGeojsonData(obj, path = "") {
  let geojsonArray = [];

  if (obj.type === "file" && obj.name.endsWith(".geojson")) {
    geojsonArray.push(path + "/" + obj.name);
  }

  if (Array.isArray(obj.children)) {
    for (let child of obj.children) {
      geojsonArray = geojsonArray.concat(
        getGeojsonData(child, path + "/" + obj.name)
      );
    }
  }

  return geojsonArray;
}

// Call the function to get the geojson data
// const geojsonFiles = getGeojsonData(data);

async function processGeoJSONFiles() {
  let files = [];
  for await (let file of geojsonFiles) {
    files.push(file);
    // let json = await loadFile(file);
    // console.log(json);
    //   loadGeoJson(file);
  }
  console.log(files);
}

// processGeoJSONFiles();

var map = L.map("map", {
  center: L.latLng(-6.2089192, 106.689801),
  zoom: 6,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
function onEachFeature(feature, layer) {
  layer.on("click", function (e) {
    var properties = feature.properties;

    // var popupContent = "<b>Feature Properties:</b><br>";
    // for (var key in properties) {
    //   if (properties.hasOwnProperty(key)) {
    //     popupContent += key + ": " + properties[key] + "<br>";
    //   }
    // }

    var result = data_kemiskinan.find(
      (e) =>
        feature.properties.prov_name
          .toLowerCase()
          .indexOf(e.provinsi.toLowerCase()) > -1
    );
    if (result) {
      var popupContent = `<b>Kemiskinan Jakarta</b>
      <h1>${result.persentase}</h1>`;
      layer.bindPopup(popupContent);
      layer.openPopup();
    }
  });
}

function generateColor(value) {
  // Ensure the input value is within the valid range of 1 to 100
  const normalizedValue = Math.max(1, Math.min(100, value));

  // Calculate the hue value based on the normalized input value
  const hue = (240 * (normalizedValue - 1)) / 99; // Ranges from 0 (red) to 240 (blue/purple)

  // Adjust saturation and lightness values for smoother transition
  const saturation = 100; // Maximum saturation
  const lightness = 50; // Medium lightness

  // Return the generated HSL color
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function style(feature) {
  let result = data_kemiskinan.find(
    (e) =>
      feature.properties.prov_name
        .toLowerCase()
        .indexOf(e.provinsi.toLowerCase()) > -1
  );
  if (result) {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "",
      fillOpacity: 1,
      fillColor: generateColor(40 - result.persentase),
    };
  } else {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "",
      fillOpacity: 0,
      fillColor: generateColor(40 - 0),
    };
  }
}

// loadGeoJson("id3671021_pinang.geojson");
// loadGeoJson("combined.geojson");
// loadGeoJson("kab 37.geojson");
loadGeoJson("prov 37.geojson");

async function loadFile(file) {
  try {
    const res = await fetch(file);
    return await res.text();
  } catch (err) {
    console.log(err);
  }
}

async function loadGeoJson(file) {
  try {
    const res = await fetch(file);
    const json = await res.json();
    L.geoJSON(json, {
      style,
      onEachFeature: onEachFeature,
    }).addTo(map);
  } catch (err) {
    console.log(err);
  }
}
