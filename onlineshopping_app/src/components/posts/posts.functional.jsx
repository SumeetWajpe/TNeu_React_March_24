import { useEffect, useState } from "react";
import axios from "axios";
const Posts = () => {
  let [posts, setPosts] = useState([]);
  // componentDidMount() + componentDidUpdate()
  useEffect(() => {
    let thePromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    thePromise
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      <header>
        <h2>All Posts</h2>
      </header>
      <main>
        <ul>
          {posts.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Posts;
