import { map, tileLayer, marker, MapOptions, LatLngExpression } from "leaflet";
import markers from './marker.json';

const options: MapOptions = {

}
const formationsMap = map('map', options).setView([0, 0], 2);

tileLayer('https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=WlQcOtyrZYpWipgzrKk0', {

    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(formationsMap);
        marker(coordinates, { title: tooltip })
            .bindPopup(`<h1>${title}</h1><p>Country: ${country}<br>Period: ${period}</p><img class="popupimg" src="${imageFile}" style="width: ${imageSize}">`)
    )
}

//testing size img popup fix
document.querySelector(".leaflet-popup-pane")?.addEventListener("load", function (event) {
    var target = event.target!!;
    let tagName = target["popupimg"];
    let popup = map["_popup"];

    console.log("got load event from " + tagName);

    if (tagName === "IMG" && popup) {
        popup.update();
    }
}, true); // Capture the load event, because it does not bubble.
