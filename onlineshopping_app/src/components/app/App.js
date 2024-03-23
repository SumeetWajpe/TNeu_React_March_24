import "./App.css";
import React from "react";
import ListOfProducts from "../listofproducts/listofproducts.component";
import Posts from "../posts/posts.component";
import { SimpleFunctionalComponent } from "../functional/functional.component";
import { Counter } from "../counter/counter.component";

class App extends React.Component {
  render() {
    // return <ListOfProducts />;
    // return <Posts />;
    // return <SimpleFunctionalComponent msg="Hello" />;
    return <Counter />;
  }
}

export default App;
