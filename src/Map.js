import React, { Component } from 'react'
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYmtrZW56byIsImEiOiJjazE2a3k2bzYwNjVzM2Jsamw1MTgzbjZyIn0.nqQe3v1udmc5ScIgbdLOZA'

export default class Map extends Component {

  render() {




    return (
      <div id="map">

      </div>
    )
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: "map",
      center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
      zoom: 12, // starting zoom
      style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
    });

    map.on('mousedown', function (e) {
      console.log(e.lngLat.wrap())
      });
  }

}
