import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { category_id, title, image_url, details } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/categories/${category_id}`}>
          {" "}
          <Button variant="primary">Go somewhere</Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
