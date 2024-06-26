import 'leaflet/dist/leaflet.css';

class MapJS {
    constructor(mapDivId, options = {}) {
      this.mapDivId = mapDivId;
      this.options = options;
      this.initMap();
    }
  
    initMap() {
      const mapDiv = document.getElementById(this.mapDivId);
      console.log("mapDiv", mapDiv)
      if (!mapDiv) {
        throw new Error(`Element with id ${this.mapDivId} not found`);
      }
      this.mapBase = L.map(this.mapDivId)
      this.map = this.mapBase.setView(this.options.center || [51.505, -0.09], this.options.zoom || 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      //setInterval(function() { this.mapBase.invalidateSize(); }, 100);
      //this.mapBase.invalidateSize(true);
      setTimeout(() => {
        this.map.invalidateSize(true);
      }, 1000);
    }

    resize() {
      setTimeout(() => {
        this.map.invalidateSize();
        this.mapBase.invalidateSize();
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }

    addPoints(position, popupText) {
      var locIcon = L.icon({
        iconUrl: 'https://modus-icons.trimble.com/modus-outlined/svg/location-point.svg',
    
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      const marker = L.marker(position, {icon: locIcon}).addTo(this.map);
      if (popupText) {
        marker.bindPopup(popupText).openPopup();
      }
    }
  
    setView(center, zoom) {
      this.options.center = center;
      this.options.zoom = zoom;
      this.map.setView(center, zoom);
    }
  
    // updateView() {
    //   const mapDiv = document.getElementById(this.mapDivId);
    //   mapDiv.innerHTML = `<div id="map" style="height: 100%"></div>`;
    // }
}
  
export default MapJS;