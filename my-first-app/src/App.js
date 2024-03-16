import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Message from "./message/message.component";

class App extends React.Component {
  messages = [
    {
      msg: "Hello",
      from: "Jim",
      to: "Tim",
      imageUrl:
        "https://img.freepik.com/free-vector/v813-aew-05_53876-166405.jpg",
    },
    {
      msg: "Hey",
      from: "John",
      to: "Carter",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg",
    },
    {
      msg: "Hola",
      from: "Peter",
      to: "Parker",
      imageUrl:
        "https://www.shutterstock.com/image-vector/hola-word-lettering-spanish-hello-260nw-2170222797.jpg",
    },
  ];
  render() {
    return (
      <div>
        {this.messages.map(m => (
          <Message messageDetails={m} />
        ))}

        {/* <Message
          msg="Hey"
          from="John"
          to="Carter"
          imageUrl="https://t4.ftcdn.net/jpg/02/19/68/97/360_F_219689742_N53gBb5bVYPzWTOaps8A2LAUx62jbvWo.jpg"
        />
        <Message
          msg="Hola"
          from="Peter"
          to="Parker"
          imageUrl="https://www.shutterstock.com/image-vector/hola-word-lettering-spanish-hello-260nw-2170222797.jpg"
        /> */}
      </div>
    );
  }
}

export default App;
