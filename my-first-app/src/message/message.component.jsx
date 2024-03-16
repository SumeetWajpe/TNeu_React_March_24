import React from "react";
class Message extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.messageDetails.imageUrl}
          alt=""
          width="200px"
          height="150px"
        />
        <h2>{this.props.messageDetails.msg}</h2>
        <h3>From : {this.props.messageDetails.from}</h3>
        <h3>To : {this.props.messageDetails.to}</h3>
      </div>
    );
  }
}

export default Message;
