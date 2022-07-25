import React from 'react';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import ReviewCont from '../includes/ReviewCont';

function Review() {
  return (
    <>
      <Contents>
        <ReviewCont fonts="gmarket" />
      </Contents>
      <Footer skill={["section", "gmarket"]} />
    </>
  )
}

export default Review;