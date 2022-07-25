import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import SliderCont from '../includes/SliderCont';

function Slider() {
  return (
    <>
      <Header fonts="gmarket" />
      <Contents>
        <SliderCont fonts={["slider_wrap", "gmarket"]} />
      </Contents>
    </>
  )
}

export default Slider;
