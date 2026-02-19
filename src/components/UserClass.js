import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        contact: "",
      },
    };
    console.log(this.props.name + "child constructor is called");
  }
  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
    const data = await fetch("https://api.github.com/users/vsolanki888");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        contact: json.login,
        avatar_url: json.avatar_url,
      },
    });
  }
  componentDidUpdate() {
    console.log(this.props.name + "child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(this.props.name + "child componentWillUnmount");
  }
  render() {
    const { name, location, contact, avatar_url } =
      this.state.userInfo || this.props;
    console.log(this.props.name + "childrender is called");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
