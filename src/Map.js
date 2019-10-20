
import React, { Component } from 'react'
import Sidebar from './Sidebar'
const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = 'pk.eyJ1IjoiYmtrZW56byIsImEiOiJjazE2a3k2bzYwNjVzM2Jsamw1MTgzbjZyIn0.nqQe3v1udmc5ScIgbdLOZA'

export default class Map extends Component {

  map = {
    currLat: 10000, currLong: 1235
  }

  constructor(){
    super()

    this.state = {
      currLat: 10000, currLong: 1235
    }
    this.clickhandler = this.clickhandler.bind(this)
  }

  clickhandler() {
    this.setState({
      currLat: this.map.currLat,
      currLong: this.map.currLong
    })
  }

  render() {
    console.log("what happens",this.map.currLat)
    return (
      <div>
        <div id="map" onClick={this.clickhandler}>
        </div>
        <Sidebar data = {this.state}/>
      </div>
    )
  }
  componentDidMount() {
     this.map = new mapboxgl.Map({
      container: "map",
      center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
      zoom: 12, // starting zoom
      style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
    });

    this.map.on('mousedown', (e) => {
      const data = e.lngLat.wrap()
      this.map.currLong = data.lng
      this.map.currLat = data.lat
      });

  }


}

=======
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

