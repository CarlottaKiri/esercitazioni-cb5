import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName, maidenName } = data;

  return (
    <div className="Friend">
      <img className="img" src={image} alt={lastName} />
      <div className="friend-infos">
        <h4 className="name">{`${firstName} ${lastName}`}</h4>
        <p className="nickname">@{maidenName}</p>
        <p className="mins">🟢{Math.floor(Math.random() * 60)}mins</p>
        <div className="buttons">
          <button className="friend-button">✉</button>
          <button className="friend-button">👤</button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
