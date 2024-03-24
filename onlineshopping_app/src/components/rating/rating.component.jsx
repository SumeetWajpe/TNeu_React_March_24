import React from "react";

function Rating(props) {
  let ratings = [];
  for (let index = 0; index < props.noofstars; index++) {
    ratings.push(
      <span style={{ color: "orange" }} key={index}>
        <i className="fa-solid fa-star"></i>
      </span>,
    );
  }
  return ratings;
}

// class Rating extends React.Component {
//   render() {
//     let ratings = [];
//     for (let index = 0; index < this.props.noofstars; index++) {
//       ratings.push(
//         <span style={{ color: "orange" }} key={index}>
//           <i className="fa-solid fa-star"></i>
//         </span>,
//       );
//     }
//     return ratings;
//   }
// }
export default Rating;
