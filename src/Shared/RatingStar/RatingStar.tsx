import React from 'react';
import ReactStars from  'react-rating-stars-component';

function RatingStar() {
    const ratingChanged = (newRating: any) => {
        console.log(newRating);
    };
    const starSize = window.innerWidth < 768 ? 2 : 2;

    return (
      <div style={{ maxWidth: '300px', margin: 'auto',display:'flex' }}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={starSize}
          activeColor="#ffd700"
        />
      </div>
    );
}

export default RatingStar
