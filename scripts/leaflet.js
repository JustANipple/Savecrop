const coordinates = [44.698459370138465, 8.028062422181023];
const zoom = 15;
const popupContent = `
<h1>page93® s.r.l.</h1>
<p>c.so Piera Cillario 6-8 12051, Alba (CN)</p>
<a href="tel:017333662">tel: +39 0173 33662</a>
<a href="mailto:info@page93.it">mail: info@page93.it</a>
`;
const marker = L.marker(coordinates);

const map = L.map('map').setView(coordinates, zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

marker
    .addTo(map)
    .bindPopup(popupContent, {offset: [0, -5]})
    .openPopup();