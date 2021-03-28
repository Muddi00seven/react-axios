import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // then method
    // axios.get("https://www.reddit.com/r/reactjs.json").then((res) => {
    //   const newPosts = res.data.data.children.map((obj) => obj.data);
    //   setPosts(newPosts);
    // });

    // async method
    (async () => {
      let response = await axios.get("https://www.reddit.com/r/reactjs.json");
      let children = response.data.data.children;
      let newPosts = children.map((obj) => {
        return obj.data;
      });
      setPosts(newPosts);
    })()
  }, [refresh]);

  console.log("this is our api data", posts);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => setRefresh(true)}>Refresh</button>
    </div>
  );
}

export default App;
