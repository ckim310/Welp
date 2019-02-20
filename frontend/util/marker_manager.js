export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    businesses.forEach((business, idx) => {
      const index = idx + 1;
      this.createMarkerFromBusiness(business, index);
    });
  }

  createMarkerFromBusiness(business, idx) {
    const position = new google.maps.LatLng(business.latitude, business.longitude);
  
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      label: `${idx}`,
      animation: google.maps.Animation.DROP,
      businessId: business.id
    });
  
    this.markers[marker.businessId] = marker;
  }

}