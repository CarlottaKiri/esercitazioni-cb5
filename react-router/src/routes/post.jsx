import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles/details.module.scss";

export default function Post() {
  const { post } = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${post}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>

        <p>Likes: {postData.reactions}</p>
        <Link to="/posts"> Posts List</Link>
      </div>
    </div>
  );
}
