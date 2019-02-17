import React from 'react';
import { connect } from 'react-redux';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  componentDidMount() {

    let mapOptions;
    if (this.props.singleBusiness) {
      const { business } = this.props;
      const position = new google.maps.LatLng(business.latitude, business.longitude);
      mapOptions = {
        center: position,
        zoom: 15
      };
    } else if (this.props.searches) {
      const { searches } = this.props;
      const position = new google.maps.LatLng(searches[0].latitude, searches[0].longitude);
      mapOptions= {
        center: position,
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP,
          style: google.maps.ZoomControlStyle.HORIZONTAL,
        },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      };
    } else {
      const { businesses } = this.props;
      let position;
      if (businesses.length !== 0) {
        position = new google.maps.LatLng(businesses[0].latitude, businesses[0].longitude) || { lat: 40.742829, lng: -73.986679 };
      } else {
        position = { lat: 40.742829, lng: -73.986679 };
      }

      mapOptions= {
        center: position,
        zoom: 13,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP,
          style: google.maps.ZoomControlStyle.HORIZONTAL,
        },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      };
    }

    const mapNode = this.refs.map;
    this.map = new google.maps.Map(mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    if (this.props.singleBusiness) {
      this.props.fetchBusiness(this.props.business.id);
    } else if (this.props.searches) {
      this.props.searches.forEach(search =>
        this.MarkerManager.createMarkerFromBusiness(search)
      );
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate() {
    if (this.props.singleBusiness) {
      const targetBusiness = this.props.business;
      this.MarkerManager.updateMarkers([targetBusiness]);
    } else if (this.props.searches) {
      this.MarkerManager.updateMarkers(this.props.searches);
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  render() {

    return (
      <div id="map" ref="map"></div>
    )
  }
}

const mapStateToProps = (state) => {
  const businesses = Object.values(state.entities.businesses);

  return {
    businesses,
  }
}

export default connect(mapStateToProps, null)(Map);