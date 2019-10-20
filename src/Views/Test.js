import React, { Component } from 'react'
import { tsConstructorType } from '@babel/types'


export default class Test extends Component {
  constructor (){
    super()
    this.state = {
      long: document.ourLongit,
      lat: document.ourLat
    }
  }

  render() {
    console.log(this.state.long)
    return (
      <div>
      </div>
    )
  }
}
