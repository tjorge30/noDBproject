import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class App extends Component {
  // the constructor function invoking super and setting state
  constructor() {
    super();
    this.state = {
      comments: [],
      text: "",
    };
  }

  componentDidMount() {
    axios
      .get("/api/comments")
      .then((res) => {
        this.setState({ comments: res.data });
      })
      .catch((err) => console.log(err));
  }

  updateText(text) {
    this.setState({ text });
  }

  handelPost = (e) => {
    e.preventDefault();
    const comment = this.state.text;
    axios
      .post("/api/comments", { comment })
      .then((res) => this.setState({ text: "", comments:res.data }), alert("Thank you for your comment!"))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const commentsList = this.state.comments.map((el, i) => {
      return (
        <li key={i} className="single_comment">
          {el.comment}
        </li>
      );
    });

    return (
      <div className="comments_pg">
        <div className="input_area">
          <h1>Leave a Comment for the Artist</h1>
          <textarea
            name="text"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          ></textarea>
          <button onClick={(e) => this.handelPost(e)}>SUBMIT</button>
          <ul>{commentsList}</ul>
        </div>
      </div>
    );
  }
}
