import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <ul className="list-group">
          {posts.map(p => (
            <li key={p.id} className="list-group-item">
              <Link to={"/postdetails/" + p.id}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Posts;
