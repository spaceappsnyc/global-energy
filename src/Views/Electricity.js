import React from 'react';
import axios from 'axios'

class Electricity extends React.Component {
    constructor() {
        super();
        this.state = {
            solarData: {outputs:{ac_monthly:[], dc_monthly: []}},
        }
    }

    async componentDidMount () {
        console.log("made the call")
        const solarResponse = await axios.get('https://developer.nrel.gov/api/pvwatts/v6.json?api_key=GDegXZpZdwcvtgRxy4bovbrVtN6NbLTV9UDBpRyo&lat=40.7698823&lon=-73.9656831&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10')
        this.setState({solarData: solarResponse.data})
        console.log("The state is", this.state)
    }

    render() {
        const {ac_monthly, dc_monthly} = this.state.solarData.outputs
        return (
            <div className='electricity'>
                <h1>Electrical Data</h1>
                <ul>
                    {ac_monthly.map((output, index) => <li key = {index}>{output}</li>)}
                </ul>
            </div>
        )
    }

}

export default Electricity