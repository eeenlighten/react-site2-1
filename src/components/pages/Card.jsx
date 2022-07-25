import React from 'react';
import Contents from '../layout/Contents';
import CardCont from '../includes/CardCont';

function Card() {
  return (
    <>
      <Contents>
        <CardCont skill={["section", "gmarket"]} />
      </Contents>
    </>
  )
}

export default Card;
