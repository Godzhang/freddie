import React, { useState } from "react";
import "./index.scss";
import { Row, Col } from "antd";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import TodoList from "@/components/home/todolist/todolist";

const list = [
  {
    name: "todolist",
    path: "/todolist",
    component: TodoList,
  },
];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Row className="home-page">
      <Col className="nav" span={6}>
        <ul>
          {list.map((item, index) => (
            <Link key={index} to={item.path}>
              <li
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </Col>
      <Col className="display" span={18}>
        <Switch>
          {list.map((item, index) => (
            <Route key={index} path={item.path} to={item.component} />
          ))}
          <Redirect to={list[0].path} />
        </Switch>
      </Col>
    </Row>
  );
};

export default Home;
