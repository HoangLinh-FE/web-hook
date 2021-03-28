import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {useState} from 'react';
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

function App() {
  // const [todoList, setTodoList] = useState([]);

  // function handleTodoFormSubmit(formValues) {
  //   console.log('Form Submit:', formValues)

  //   // add new todo current tod list
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   }
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }
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
          {/* <CommentFunc onSubmit={handleTodoFormSubmit} />
          <TodoList todos={todoList}></TodoList> */}
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
      </Router>
    </div>
  );
}

export default App;
