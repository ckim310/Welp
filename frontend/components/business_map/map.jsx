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
    } else {
      mapOptions= {
        center: { lat: 40.742829, lng: -73.986679 },
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
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate() {
    if (this.props.singleBusiness) {
      const targetBusiness = this.props.business;
      this.MarkerManager.updateMarkers([targetBusiness]);
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

const mapStateToProps = ({ entities }) => {
  const businesses = Object.values(entities.businesses)
  return {
    businesses,
  }
}

export default connect(mapStateToProps, null)(Map);