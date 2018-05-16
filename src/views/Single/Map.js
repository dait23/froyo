import React, {Component} from 'react';


import Map from 'react-js-google-maps';

import PropTypes from 'prop-types';







class Maps extends Component {




  render() {

  const names = this.props.name; 

  const setMarker = (map) => {
  const uluru = { lat: this.props.lat, lng: this.props.lng };
  const marker = new window.google.maps.Marker({
    position: uluru,
    icon:"https://res.cloudinary.com/spazeeid/image/upload/c_thumb,h_50,w_50/v1526402055/marker_bummlp.png",
    map: map
  });
  window.google.maps.event.addListener(marker, 'click', function() {
    const infoWindow = new window.google.maps.InfoWindow({
      content:"<div>"+ names + "</div>"
    });
    infoWindow.open(map, marker);
  })
}


   const mapOptions = {
      zoom: 16,
      center: { lat: this.props.lat, lng: this.props.lng }
    }
   
    return (
      
     
       <div>
   
         <Map
          id="map1"
          apiKey="AIzaSyB9lgF3DLqYCw-0NgLqzPJpxI1k-iVBnFY"
          mapOptions= {mapOptions}
          style={{ width: '100%', height: 400, float: "left" }}
          onLoad={setMarker}
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


export default Maps;
