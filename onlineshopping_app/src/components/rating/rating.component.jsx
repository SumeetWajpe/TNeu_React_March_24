import React from "react";

class Rating extends React.Component {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(
        <span style={{ color: "orange" }}>
          <i className="fa-solid fa-star"></i>
        </span>,
      );
    }
    return ratings;
  }
}
export default Rating;
