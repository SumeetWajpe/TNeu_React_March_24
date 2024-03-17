import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.productdetails.imageUrl}
            alt={this.props.productdetails.title}
            height="200px"
          />

          <div>
            <h5>{this.props.productdetails.title}</h5>
            <p>{this.props.productdetails.rating}</p>
          </div>

          <p> ₹.{this.props.productdetails.price}</p>

          <div>
            <button>
              <i></i> {this.props.productdetails.likes}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
