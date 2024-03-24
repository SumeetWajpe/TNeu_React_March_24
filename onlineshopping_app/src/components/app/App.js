import "./App.css";
import React from "react";
import ListOfProducts from "../listofproducts/listofproducts.component";
import { SimpleFunctionalComponent } from "../functional/functional.component";
import { Counter } from "../counter/counter.component";
import Posts from "../posts/posts.functional";
import { GetPostById } from "../posts/getpostbyid.component";

class App extends React.Component {
  render() {
    // return <ListOfProducts />;
    // return <Posts />;
    // return <SimpleFunctionalComponent msg="Hello" />;
    // return <Counter />;
    // return <Posts />;
    return <GetPostById />;
  }
}

export default App;
