import React from 'react'
import axios from 'axios'

class SolarRad extends React.Component {

  constructor () {
    super()
    this.state = {
      solrad: {outputs: {solrad_monthly: []}}
    }
  }

 async componentDidMount() {
    const solarRad = await axios.get('https://developer.nrel.gov/api/pvwatts/v6.json?api_key=GDegXZpZdwcvtgRxy4bovbrVtN6NbLTV9UDBpRyo&lat=40&lon=-105&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10')

    this.setState({solrad: solarRad.data})
  }

  render() {
    return (
    <div>
      <h1>Solar Radiation</h1>
      <ul>
        {this.state.solrad.outputs.solrad_monthly.map(rad => {
        return <li>{rad}</li>
        })}
      </ul>
    </div>
    )
  }
  
}

export default SolarRad