import * as React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Axios from "axios";

interface IAppProps {}

class Home extends React.Component {
  state = {
    todos: [],
    visible: 10,
    pageNo: 0,
  };
  componentDidMount() {
    const self: any = this;
    self.fetchMore(this.state.pageNo);
    window.addEventListener("scroll", self.onScrollE);
  }
  fetchMore = (no) => {
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${this.state.pageNo}`
    )
      .then((res) => {
        console.log(res);
        this.setState({
          todos:[...this.state.todos,...res.data] ,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onScrollE = (ev) => {
    const self: any = this;
    console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);
    if (
      window.innerHeight + window.scrollY ===
      document.body.offsetHeight + window.scrollY
    ) {
      //User is currently at the bottom of the page
      self.addNewItem();
    }
  };
  addNewItem = () => {
    console.log("running");
    this.setState((prev: any) => {
      return {
        pageNo: prev.pageNo + 1,
      };
    });
    this.fetchMore(this.state.pageNo);
  };
  render() {
    const { todos, visible } = this.state;
    console.log(visible);
    return (
      <>
        <div className="container">
          {todos.map((data: any, i) => (
            <div className="card" key={i}>
              <img
                src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
                alt="Person"
                className="card__image"
              />
              <p className="card__name">{data.id}</p>
              <div className="grid-container">
                <div className="grid-child-posts">156 Post</div>
                <div className="grid-child-followers">1012 Likes</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Home;
