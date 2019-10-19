import Slider from 'react-input-slider';
import React, {useState} from 'react';

const Slide = (props) => {
  const [state, setState] = useState({ x: 10, y: 10});
  return (
  <div>
    ({state.x}, {state.y})
    <Slider axis='xy' x={state.x} y={state.y} onChange={setState} />
    <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
      />
  </div>
  )
}

export default Slide;
