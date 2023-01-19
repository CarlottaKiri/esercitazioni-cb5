import "./index.css";

const Tag = ({ data, setTagState, tagState }) => {
  const onHandleClick = (e) => {
    e.preventDefault();

    if (tagState === data) {
      setTagState("");
    } else {
      setTagState(data);
    }
  };

  return (
    <>
      <button
        onClick={onHandleClick}
        className={`hashtag ${tagState === data ? "active" : ""}`}
      >
        #{data}
      </button>
    </>
  );
};

export default Tag;
