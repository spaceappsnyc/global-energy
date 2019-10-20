import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';


// mapboxgl.accessToken = 'pk.eyJ1IjoiYmtrZW56byIsImEiOiJjazE2a3k2bzYwNjVzM2Jsamw1MTgzbjZyIn0.nqQe3v1udmc5ScIgbdLOZA'

export default class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    }
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    )
  }

}

// componentDidMount() {
//   const map = new mapboxgl.Map({
//     container: "map",
//     center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//     zoom: 12, // starting zoom
//     style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
//   });

//   map.on('mousedown', function (e) {
//     console.log(e.lngLat.wrap())
//   });
// }

