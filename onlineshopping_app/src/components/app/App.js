import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListOfProducts from "../listofproducts/listofproducts.component";
import { SimpleFunctionalComponent } from "../functional/functional.component";
import { Counter } from "../counter/counter.component";
import Posts from "../posts/posts.functional";
import { GetPostById } from "../posts/getpostbyid.component";
import Navbar from "../navbar/navbar.component";
import Error from "../Error/error.component";
import PostDetails from "../postdetails/postdetails.component";

function App() {
  return (
    <BrowserRouter>
      {/* <a href="/">Products</a> | <a href="/posts">Posts</a> */}
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfProducts}></Route>
        <Route path="/posts" Component={Posts}></Route>
        <Route path="/postdetails/:id" Component={PostDetails}></Route>
        <Route path="*" Component={Error}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
