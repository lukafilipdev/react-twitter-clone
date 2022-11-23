import React from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Luka Filip"
        username="lukafilip05"
        verified={true}
        text="This is twitter-clone :D"
        image="https://media.tenor.com/5mrYw78CshUAAAAF/blushing-smile.png"
        avatar="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"
      />
      <Post
        displayName="Elon Musk"
        username="elonmusk"
        verified={true}
        text="Who are you @lukafilip05?"
        image=""
        avatar="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Felon-musk-changes-twitter-profile-picture-bored-ape-yacht-club-collage-info-000.jpg?w=960&cbr=1&q=90&fit=max"
      />
      <Post
        displayName="Luka Filip"
        username="lukafilip05"
        verified={true}
        text="@elonmusk"
        image="https://media.tenor.com/UfI4uNElyPMAAAAF/i-am-your-father-darth-vader.png"
        avatar="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"
      />
    </div>
  );
}

export default Feed;
