import React from "react";
import { Container, Badge, Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";


const Project = () => {
    return (
        <div className="">
            <Container className="Projects">

                <Card className="ProjCard">
                    <CardBody>
                        <Link to="https://github.com/uwbaddev/baddie-match" style={{ textDecoration: 'none', color: '#7D00AF' }}>
                            <h1 className="">Baddie-match</h1>
                        </Link>
                        <div className="badge">
                            <Badge bg="secondary">React</Badge>
                            <Badge bg="secondary">HTML</Badge>
                            <Badge bg="secondary">CSS</Badge>
                            <Badge bg="secondary">JavaScript</Badge>
                        </div>
                        <ul className="Project PersonalWebsite">
                            <li>Understand HTML5 and CSS and its semantic elements.</li>
                            <li>JSX syntax and how to use it in React components.</li>
                            <li>Implementing navigation in a React application using React Router</li>
                        </ul>
                        <Card.Footer>December 1, 2023</Card.Footer>
                    </CardBody>
                </Card>
                <Card className="ProjCard">
                    <CardBody>
                        <Link to="https://github.com/MINHCheng/website" style={{ textDecoration: 'none', color: '#7D00AF' }}>
                            <h1 className="">Personal Website</h1>
                        </Link >
                        <div className="badge">
                            <Badge bg="secondary">React</Badge>
                            <Badge bg="secondary">HTML</Badge>
                            <Badge bg="secondary">CSS</Badge>
                        </div>
                        <ul className="Project PersonalWebsite">
                            <li>Understand HTML5 and CSS and its semantic elements.</li>
                            <li>JSX syntax and how to use it in React components.</li>
                            <li>Implementing navigation in a React application using React Router</li>
                        </ul>
                        <Card.Footer>November 21, 2023</Card.Footer>
                    </CardBody>
                </Card>
                <Card className="ProjCard">
                    <CardBody>
                        <h1 className="">Minesweeper</h1>
                        <div className="badge">
                            <Badge bg="secondary">C++</Badge>
                        </div>
                        <ul className="Project PersonalWebsite">
                            <li>Generation of random numbers to place mines in different
                                positions on the game board.</li>
                            <li>Handling game loops for continuous gameplay until a win
                                or loss condition is met.</li>
                            <li>Developing algorithms for revealing cells, flagging mines,
                                and determining the game's win or loss conditions.</li>
                        </ul>
                        <Card.Footer>December 13, 2022</Card.Footer>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
export default Project;