import "./index.css";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Tag from "../tag/Tag";

const TagsList = ({ setTagState, tagState }) => {
  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    GET("posts").then((res) =>
      setTagsList(res.posts.slice(0, 6).map((post) => post.tags[0]))
    );
  }, []);

  return (
    <div className="TagsList">
      <h3 className="taglist-title"> Popular Tags</h3>
      <div className="tags-content">
        {tagsList.map((tag) => (
          <Tag
            setTagState={setTagState}
            tagState={tagState}
            className="tags"
            data={tag}
            key={tag}
          />
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default TagsList;
