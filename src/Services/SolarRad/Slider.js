import Slider from 'react-input-slider';
import React, {useState} from 'react';

const Slide = (props) => {
  const [state, setState] = useState({ x: 10000, y: 10000});
  console.log(state)
  return (
  <div className='Slider-Body'>
    <Slider
        axis="x"
        x={state.x}
        xmax={10000}
        onChange={({ x }) => setState(state => ({ ...state, x}))}
      />
  </div>
  )
}

export default Slide;
