import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import {
  Container,
  Card,
  InputGroup,
  Col,
  Row,
  Button,
  FormControl,
  Image,
  Spinner,
} from "react-bootstrap";
import "./style.css";
import userIcon from "../../Image/Icon-user.jpg";
import EditContent from "../EditContent";
import AddImage from "../UploadImage";
import Comment from "../Comment";
import UploadDoc from '../UploadDoc'

function DetailReport(props) {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    `http://hn.algolia.com/api/v1/search?query=${query}`
  );
  const obj = {
    name: "Gin",
    age: 21,
  };
  const [fakeData, setFakeData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);

      const result = await axios();

      setFakeData(result.fakeData);
      // setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="Detail__bg">
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header className="Detail__title">The Report 1</Card.Header>
              <Card.Body>
                <Card.Text>
                  {fakeData.hits.map((item) => (
                    <p key={item.name}>
                      <a href={item.url}>{item.name}</a>
                    </p>
                  ))}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="Detail__cmt-block">
                <a className="Detail__cmt-btn">
                  <EditContent></EditContent>
                </a>
                <a className="Detail__cmt-btn">
                  <AddImage></AddImage>
                </a>
                <a className="Detail__cmt-btn">
                  <UploadDoc></UploadDoc>
                </a>
              </Card.Footer>
            </Card>

            <Comment></Comment>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailReport;
