import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function PostDetails() {
  const { id } = useParams(); // reads the value of routing parameter in id variable
  let [thePost, setThePost] = useState({
    id: 0,
    title: "",
    userId: 0,
    body: "",
  });
  useEffect(() => {
    let thePromise = axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id,
    );
    thePromise.then(res => {
      setThePost(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Post Details for Id - {id} !</h1>
      <h2>Title : {thePost.title}</h2>
      <h2>Body : {thePost.body}</h2>
    </div>
  );
}

export default PostDetails;
