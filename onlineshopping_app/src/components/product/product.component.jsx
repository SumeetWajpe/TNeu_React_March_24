import React, { Component } from "react";
import Rating from "../rating/rating.component";

export default class Product extends Component {
  state = { currLikes: 100 };
  render() {
    return (
      <div className="col-md-3 g-1">
        <div className="card">
          <img
            src={this.props.productdetails.imageUrl}
            alt={this.props.productdetails.title}
            className="card-img-top"
            height="200px"
          />

          <div className="card-body">
            <h5>{this.props.productdetails.title}</h5>
            <p>
              <Rating noofstars={this.props.productdetails.rating} />
            </p>
            <p> ₹.{this.props.productdetails.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.HandleIncrementLikes()}
            >
              {this.state.currLikes}
            </button>
          </div>
        </div>
      </div>
    );
  }

  HandleIncrementLikes() {
    //this.props.productdetails.likes++; // this does not work as props are readonly
    // this.state.currLikes++; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 }); // setState - predefined
  }
}
