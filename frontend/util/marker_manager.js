export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    businesses.forEach(business => {
      // this.markers[business.id] = business;
      this.createMarkerFromBusiness(business);
    });
    // debugger
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.latitude, business.longitude);
    // debugger
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id
    });
    // debugger
    this.markers[marker.businessId] = marker;
  }
}