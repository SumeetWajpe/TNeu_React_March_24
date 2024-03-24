import { useState, useEffect } from "react";
import axios from "axios";
export const GetPostById = () => {
  let [postId, setPostId] = useState(1);
  let [post, setPost] = useState({ id: 0, userId: 0, title: "", body: "" });
  useEffect(() => {
    let thePromise = axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId,
    );
    thePromise
      .then(res => {
        setPost(res.data);
      })
      .catch(err => console.log(err.message));
  }, [postId]);
  return (
    <>
      <label htmlFor="txtPostId">Post Id : </label>{" "}
      <input
        type="text"
        id="txtPostId"
        typeof="number"
        onInput={e => setPostId(e.target.value)}
      />
      <p>{post.title}</p>
    </>
  );
};
