// Property Map Initialization
// Initialize Leaflet Map for 16730 Nicklaus Drive #51, Sylmar, CA 91342

function initMap() {
  // Property coordinates for 16730 Nicklaus Drive #51, Sylmar, CA 91342
  const propertyLat = 34.323508;
  const propertyLng = -118.494382;
  
  // Initialize the map
  const map = L.map('propertyMap').setView([propertyLat, propertyLng], 15);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  // Create custom icon
  const propertyIcon = L.divIcon({
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2563eb" width="32" height="32">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `,
    className: 'custom-div-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
  
  // Add marker for the property
  const marker = L.marker([propertyLat, propertyLng], { icon: propertyIcon })
    .addTo(map)
    .bindPopup(`
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 250px;">
        <h3 style="margin: 0 0 8px; font-size: 16px; color: #1f2937;">16730 Nicklaus Drive #51</h3>
        <p style="margin: 0 0 4px; color: #6b7280; font-size: 14px;">Sylmar, CA 91342</p>
        <p style="margin: 0; font-size: 14px; color: #374151;">2 bed • 2 bath • 1,228 sq ft</p>
      </div>
    `)
    .openPopup();
}

// Initialize map when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if map container exists before initializing
  if (document.getElementById('propertyMap')) {
    initMap();
  }
});
