import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Card,
  InputGroup,
  Col,
  Row,
  Button,
  FormControl,
  Image,
  Form,
} from "react-bootstrap";
import "./style.css";
import userIcon from "../../Image/Icon-user.jpg";
import TodoList from "../../components/TodoList";

CommentFunc.propTypes = {
  onSubmit: PropTypes.func,
};

CommentFunc.defaultProps = {
  onSubmit: null,
};

function CommentFunc(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // prevent  reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);

    // Reset form
    setValue("");
  }
  return (
    <div className='Comment__bg'>
      <Container>
        <Row className="Comment__block-cmt">
          <Col md="1">
            <Image src={userIcon} className="Comment__user-cmt" roundedCircle />
          </Col>
          <Col md="11">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                value={value}
                placeholder="Write Comment..."
                onChange={handleValueChange}
              ></Form.Control>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommentFunc;
