import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet(props) {
  //console.log("----------------------", props)

  // linkejem el array amb el props, amb el console.log veiem que es un objecte amb una propietat "tweet".
  // dintre d'aquesta hi ha un objecte amb 3 propietats: user( amb 3 dins), timestamp i message.

  // ...
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;