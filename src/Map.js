import React, { Component } from 'react'
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoidGVjaC1leHBsb3JlcnMiLCJhIjoiY2sxeG90YmozMDN5ZjNkcThpajNtdDFtcCJ9.V0rpcBkC3kCi71Zm_pMurw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

export default class Map extends Component {



  render() {
    return (
      <div>

      </div>
    )
  }
}
