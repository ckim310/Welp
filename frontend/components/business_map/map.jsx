import React from 'react';
import { connect } from 'react-redux';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.742829, lng: -73.986679 },
      zoom: 13
    };
    const mapNode = this.refs.map;
    this.map = new google.maps.Map(mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    return (
      this.MarkerManager.updateMarkers(this.props.businesses)
    );
  }

  render() {
    // <div id="map" ref={map => this.mapNode = map}></div>
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