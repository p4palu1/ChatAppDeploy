import React, { Component } from 'react';
import Video from "./video";
import t1 from "./t1.jpg";
import t2 from "./t2.png";
import Header from "./header";
import Menu from "./menu"
import Feed from "./feed";
import SearchedFeed from './searchFeed'
import "./app.css"
import $ from "jquery";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const dates = [new Date(2021, 2, 1), new Date(2019, 7, 1), new Date(2020, 2, 11), new Date(2001, 6, 10)]

  const vids = [
    {
      title: "How to make an eye catching thumbnail",
      desc: "uno desc",
      views: 100244,
      channel: "reem",
      thumbnail: t1, 
      date: dates[0],
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      id: 1
    },
    {
      title: "dos",
      desc: "dos desc",
      views: 140244,
      channel: "reem",
      thumbnail: t2,
      date: dates[1],
      url: "https://www.youtube.com/watch?v=kK_Wqx3RnHk",
      id: 2
    },
    {
      title: "Intense Israel-Palestine debate MUST WATCH!",
      desc: "dos desc",
      views: 2340763347,
      channel: "reem",
      thumbnail: t2,
      date: dates[2],
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      id: 3
    },
    {
      title: "Neymar JR highlight VS AC Monaco",
      desc: "dos desc",
      views: 3347,
      channel: "Football",
      thumbnail: t2,
      date: dates[3],
      url: "https://www.youtube.com/watch?v=kK_Wqx3RnHk",
      id: 4
    }
  ]

  return (
    <div className="App" id="app">

      <Router>
          <Switch>
              <Route path="/search/:searchTerm">
                <Header />
                <Menu  />
                <SearchedFeed vids={vids}/>
              </Route>
              <Route path="/">
                  <Header />
                  <Menu  />

                  <Feed vids={vids}/>
              </Route>
          </Switch>
      </Router>
      
      
        
         
    </div>
  );
}
  




export default App;
