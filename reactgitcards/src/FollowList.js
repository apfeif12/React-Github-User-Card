import "./App.css";
import React from "react";
import axios from "axios";

class FollowList extends React.Component {
  state = {
    followers: "",
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/apfeif12/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>UserName: {this.state.followers.login}</p>
        <img alt="followerprofilePic" src={this.state.followers.avatar_url} width="100" />
      </div>
    );
  }
}

export default FollowList;
