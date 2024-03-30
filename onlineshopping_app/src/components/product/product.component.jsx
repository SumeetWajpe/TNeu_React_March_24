import React, { useState } from "react";
import Rating from "../rating/rating.component";

const Product = props => {
  const [currLikes, setCurrLikes] = useState(props.productdetails.likes);
  return (
    <div className="col-md-3 g-1">
      <div className="card">
        <img
          src={props.productdetails.imageUrl}
          alt={props.productdetails.title}
          className="card-img-top"
          height="200px"
        />

        <div className="card-body">
          <h5>{props.productdetails.title}</h5>
          <p>
            <Rating noofstars={props.productdetails.rating} />
          </p>
          <p> ₹.{props.productdetails.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => setCurrLikes(currLikes + 1)}
          >
            {currLikes}
            <i class="fa-solid fa-thumbs-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
