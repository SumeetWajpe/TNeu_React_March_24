import React, { Component } from "react";

export default class Product extends Component {
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
            <p>{this.props.productdetails.rating}</p>
            <p> ₹.{this.props.productdetails.price}</p>
            <button className="btn btn-primary">
              {this.props.productdetails.likes}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
