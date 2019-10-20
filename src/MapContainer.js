
import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Slider from './Services/SolarRad/Slider'
import SolarCalc from './Views/SolarCalc'
import axios from 'axios'
const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = 'pk.eyJ1IjoiYmtrZW56byIsImEiOiJjazE2a3k2bzYwNjVzM2Jsamw1MTgzbjZyIn0.nqQe3v1udmc5ScIgbdLOZA'

export default class MapContainer extends Component {

  map = {
    currLat: 10000, currLong: 1235
  }

  constructor(){
    super()

    this.state = {
        currLat: 10000, 
        currLong: 1235, 
        x: 10000, 
        y: 10000,
        production: 0,
        solarRadiation: 4,
        panelArea: 0,
        performanceRatio: .35,
        costPerWatt: 1.6,
        utilityCostPerKwH: 0.20,
        totalSystemCost: 0,
        breakEven: 0,
        payoffDate: ''
    }
    this.clickhandler = this.clickhandler.bind(this)
  }

        async calcSolarProduction() {
                const energy = this.state.solarRadiation
                        * (this.state.panelArea / 25)
                        * this.state.performanceRatio
                await this.setState({ production: energy })
        }

        async calcSolarBreakEven() {
                const breakEven = this.state.totalSystemCost /
                        (this.state.utilityCostPerKwH * this.state.production)
                await this.setState({ breakEven: breakEven })
        }

        async calcSolarCosts() {
                const costs = this.state.production * this.state.costPerWatt
                await this.setState({ totalSystemCost: Math.round(costs) })
        }

        async calcSolarPayoffDate() {
                const years = Math.floor(this.state.breakEven)
                const months = Math.ceil(12 * (this.state.breakEven - years))
                const yearsString = years > 1 ? 'years' : 'year'
                const monthsString = months > 1 ? 'months' : 'month'
                const SolarPayoffDate = `${years} ${yearsString} and ${months} ${monthsString}`
               await this.setState({ payoffDate: SolarPayoffDate })
        }
        async componentDidMount() {
                this.map = new mapboxgl.Map({
                        container: "map",
                        center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
                        zoom: 12, // starting zoom
                        style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
                });

                this.map.on('mousedown', (e) => {
                        const data = e.lngLat.wrap()
                        this.map.currLong = data.lng
                        this.map.currLat = data.lat
                });
        }


  async clickhandler() {
    this.setState({
      currLat: this.map.currLat,
      currLong: this.map.currLong
    })
    const solarResponse = await axios.get('https://developer.nrel.gov/api/pvwatts/v6.json?api_key=GDegXZpZdwcvtgRxy4bovbrVtN6NbLTV9UDBpRyo&lat=40.7698823&lon=-73.9656831&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10')
    this.setState({ solarData: solarResponse.data, panelArea: 7000 })
       await this.calcSolarProduction()
          await this.calcSolarCosts()
       await  this.calcSolarBreakEven()
       await this.calcSolarPayoffDate()

  }

  render() {
    console.log("what happens",this.map.currLat)
    return (
      <div>
        {/* <Slider
          axis="x"
          x={this.state.x}
          xmax={10000}
          onChange={({ x }) => this.setState(state => ({ ...state, x }))}
        /> */}
        <div className='sidebar'>
                <div>
                        <p>You are here: Lon: {this.state.currLong}, Lat: {this.state.currLat}</p>
                        <p>Your break even: {this.state.breakEven}</p>
                        <p>You'll pay off your solar by: {this.state.payoffDate}</p>
                        <p>Your total system cost is: ${this.state.totalSystemCost}</p>
                        <p>Your production is: {this.state.production} kW</p>
                </div>
        </div>
        <div id="map" onClick={this.clickhandler}>
        </div>

  
      </div>
    )
  }


}


