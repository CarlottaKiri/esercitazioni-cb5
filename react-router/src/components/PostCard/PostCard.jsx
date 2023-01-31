import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export default function PostCard({ post }) {
  const navigate = useNavigate();
  const onHandleClick = () => navigate(`/posts/${post.id}`);
  return (
    <>
      <div onMouseUp={onHandleClick} className={styles.main}>
        <h4>{post.title}</h4>
        <h4>#{post.tags[0]}</h4>
      </div>
    </>
  );
}
