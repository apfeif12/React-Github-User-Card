import "./App.css";
import React from "react";
import axios from "axios";
import FollowList from "./FollowList";

class App extends React.Component {
  state = {
    user: "",
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/apfeif12")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.user.name}</h1>
        <h1>Username: {this.state.user.login}</h1>
        <h1>Following: {this.state.user.following}</h1>
        <h1>Followers: {this.state.user.followers}</h1>
        <img alt="profilePic" src={this.state.user.avatar_url} width="200" />
        <div>
          <FollowList />
        </div>
      </div>
    );
  }
}

export default App;
