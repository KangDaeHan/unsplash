import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import PictureList from "./components/picture-list";
import LoadMore from "./components/load-more";
import Loader from "./components/loader";

// 기존 데이터 변경 방법
// state -> setState -> Update

//리듀서 데이터 변경 방법
//action -> reducer -> store

class App extends Component {
  state = {
    images: [],
    pending: false
  };

  //화면 렌더링시 이미지 불러오기
  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    this.setState({
      pending: true
    });
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id:
            "02a65dc0a5a51326c0bd77217dbc408d82f443d77493c5ddbb77e798a7a9d40c",
          count: 30
        }
      })
      .then(res => {
        this.setState({
          images: [...this.state.images, ...res.data.map(i => i.urls.small)],
          pending: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          pending: false
        });
      });
  };

  render() {
    return (
      <div className="App">
        <PictureList images={this.state.images} />
        <LoadMore loadMore={this.getImages} />
        {this.state.pending && <Loader />}
      </div>
    );
  }
}

export default App;
