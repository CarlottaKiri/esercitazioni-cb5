import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard/PostCard";
import styles from "./styles/lists.module.scss";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=20`)
      .then((res) => res.json())
      .then((data) => setPostsData(data.posts));
  }, []);
  return (
    <div className={styles.main}>
      <h1> Posts List</h1> <Link to={"/"}>Home</Link>
      <h4>Click on a post to read it fully!</h4>
      {postsData.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}
