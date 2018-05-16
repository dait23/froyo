import React, {Component} from 'react';


import ReactStreetview from 'react-streetview';

import PropTypes from 'prop-types';







class Street extends Component {




  render() {

  const googleMapsApiKey = 'AIzaSyBCGEeC408mAsxFtm1yG62A-l9gDFcdyXg';
  const streetViewPanoramaOptions = {
      position: {lat: this.props.lat, lng: this.props.lng},
      pov: {heading: 50, pitch: 0},
      zoom: 1
    };

   
    return (
      
     
       <div style={{
        width: '100%',
        height: '400px',
        marginBottom:'100px',
        backgroundColor: '#eeeeee'
      }}>
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>

    )
  }
}





Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  name: PropTypes.string
};


export default Street;
