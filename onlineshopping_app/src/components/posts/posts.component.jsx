import React, { Component } from "react";
import axios from "axios";
export default class Posts extends Component {
  state = { posts: [] };
  componentDidMount() {
    let thePromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    thePromise.then(res => this.setState({ posts: res.data }));
  }
  render() {
    return (
      <div>
        <h2>All Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
