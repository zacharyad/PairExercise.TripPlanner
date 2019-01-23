const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  // Your Code Here
  let newType;
  type.tolowerCase();
  if (type === 'hotel') {
    newType = iconURLs.hotels;
  } else if (type === 'restaurants') {
    newType = iconURLs.restaurants;
  } else if (type === 'activities') {
    newType = iconURLs.activities;
  } else {
    return null;
  }

  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${newType})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
