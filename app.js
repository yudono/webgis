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
    // var properties = feature.properties;

    if (feature.properties.prov_name === "ACEH") {
      loadGeoJson("aceh.geojson");
      layer.remove();
    }

    var result;
    if (feature.properties.prov_name) {
      result = data.find(
        (e) =>
          feature.properties.prov_name
            .toLowerCase()
            .indexOf(e.provinsi.toLowerCase()) > -1
      );
    }
    if (result) {
      var popupContent = `<h3>${name} ${result.provinsi}</h3>`;
      popupContent += `<h3>Tahun : ${result.tahun}</h3>`;
      //   popupContent += `<h3>Klasifikasi : ${result.klasifikasi}</h3>`;
      popupContent += `<h3>Persentase : ${result.persentase}%</h3>`;
      //   popupContent += `<h3>Per Jam : ${result.value.toLocaleString("id-ID", {
      //     style: "currency",
      //     currency: "IDR",
      //   })}</h3>`;
      //   popupContent += `<h3>Per Bulan : ${(result.value * 173).toLocaleString(
      //     "id-ID",
      //     {
      //       style: "currency",
      //       currency: "IDR",
      //     }
      //   )}</h3>`;
      layer.bindPopup(popupContent);
      layer.openPopup();
    } else {
      var popupContent = "<b>Feature Properties:</b><br>";
      for (var key in feature.properties) {
        if (feature.properties.hasOwnProperty(key)) {
          popupContent += key + ": " + feature.properties[key] + "<br>";
        }
      }

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

function calculatePercentage(value, minValue, maxValue) {
  var range = maxValue - minValue;
  var normalizedValue = value - minValue;
  var percentage = (normalizedValue / range) * 100;
  return percentage.toFixed(2); // Return percentage with 2 decimal places
}

function style(feature) {
  var result;
  if (feature.properties.prov_name) {
    result = data.find(
      (e) =>
        feature.properties.prov_name
          .toLowerCase()
          .indexOf(e.provinsi.toLowerCase()) > -1
    );
  }

  let values = data.map((e) => e.persentase);

  if (result) {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "",
      fillOpacity: 1,
      //   fillColor: generateColor(40 - result.persentase),
      //   fillColor: generateColor(40 - result.persentase * 8),
      //   fillColor: generateColor(40 - result.persentase * 10),
      fillColor: generateColor(
        calculatePercentage(
          result.persentase,
          Math.min(...values),
          Math.max(...values)
        )
      ),
    };
  } else {
    // return {
    //   weight: 2,
    //   opacity: 1,
    //   color: "white",
    //   dashArray: "",
    //   fillOpacity: 0,
    //   fillColor: generateColor(0),
    // };
  }
}

// function style(feature) {
//   return {
//     weight: 2,
//     opacity: 1,
//     color: "white",
//     dashArray: "",
//     fillOpacity: 1,
//     fillColor: "dodgerblue",
//   };
// }

// let name = "Data Kemiskinan";
// let data = data_kemiskinan;
// let name = "Data Stunting";
// let data = data_stunting;
// let name = "Data Pengangguran";
// let data = data_pengangguran;
// let name = "Rata - rata Upah Per Jam";
// let data = data_upah;
let name = "Data Sanitasi Layak";
let data = data_sanitasi;

// loadGeoJson("id3671021_pinang.geojson");
// loadGeoJson("tangerang.geojson");
// loadGeoJson("combined.geojson");
// loadGeoJson("aceh2.geojson");
// loadGeoJson("sumatra-utara.geojson");
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
