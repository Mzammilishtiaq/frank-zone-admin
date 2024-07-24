import React from 'react';
import ReactStars from  'react-rating-stars-component';

export interface RatingProps{
  size:any;
}
function RatingStar({size}:RatingProps) {
    const ratingChanged = (newRating: any) => {
        console.log(newRating);
    };
    // const starSize = window.innerWidth < 768 ? 20 : 40;

    return (
      <div style={{ maxWidth: '300px', margin: 'auto',display:'flex' }}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={size}
          activeColor="#ffd700"
        />
      </div>
    );
}

export default RatingStar
