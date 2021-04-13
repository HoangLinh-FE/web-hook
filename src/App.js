import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';
import LoginPage from "./components/Login";
import NavBar from "./components/Nav";
import Slider from "./components/BackgroundSlider";
import Majors from "./components/Major";
import Honor from "./components/WallHonor";
import Footer from "./components/Footer";
import UploadFile from "./components/UploadFile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewFile from "./components/ViewFile";
import DetailReport from "./components/Detail";
import CommentFunc from './components/Comment';
import TodoList from './components/TodoList';
import AdminPage from "./components/Admin";
import CreateUser from "./components/CreateUser";
import CallAPI from "./components/Example";
import UpdateReport from "./components/UpdateReport";
import Manager from "./components/Manager";

function App() {
  
  return (
    <div className="App">
    
      <Router>
        <Route exact path="/">
          <NavBar />
          <Slider />
          <Majors />
          <Honor />
          <Footer />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/upload">
          <NavBar />
          <UploadFile />
          <Footer />
        </Route>
        <Route path="/detail">
          <NavBar />
          <DetailReport />
          <Footer />
        </Route>
        <Route path='/admin'>
          <NavBar />
          <AdminPage />
          <Footer />
        </Route>
        <Route path='/createUser'>
          <NavBar />
          <CreateUser />
          <Footer />
        </Route>
        <Route path='/update'>
          <NavBar />
          <UpdateReport />
          <Footer />
        </Route>
        <Route path='/manager'>
          <NavBar />
          <Manager />
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
