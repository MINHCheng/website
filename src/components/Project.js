import React, { useEffect, useRef } from "react";
import { Container, Badge, Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";


const Project = () => {

    return (
        <>
            <div className="Projectpage">
                <Container className="Projects">
                    <Card className="ProjCard" >
                        <CardBody>
                        <Link to="" style={{ textDecoration: 'none', color: '#4D5359' }}>
                            <h1>Mean Reversion Strategy</h1>
                        </Link>

                        <div className="badge">
                            <Badge bg="secondary">Python</Badge>
                            <Badge bg="secondary">MySQL</Badge>
                            <Badge bg="secondary">Quant Research</Badge>
                            <Badge bg="secondary">Ed Thorp</Badge>
                        </div>

                        <ul>
                            <li>Researched the works of Ed Thorp (hedge fund manager & mathematician) and built a mean-reversion strategy based on his principles.</li>
                            <li>Back-tested daily data from 1993–2015 using Python and MySQL, analyzing cumulative performance and risk metrics.</li>
                            <li>Achieved ~1,000× total return, outperforming the benchmark by ~500% over the same period.</li>
                            <li>Sharpe ratio of 0.24, reflecting high volatility despite strong long-term gains.</li>
                        </ul>

                        <Card.Footer className="bottom-footer">April 2025</Card.Footer>
                        
                        </CardBody>
                    </Card>

                    <Card className="ProjCard" >
                        <CardBody>
                            <Link to="" style={{ textDecoration: 'none', color: '#4D5359' }}>
                                <h1>VR Golf</h1>
                            </Link>
                            <div className="badge">
                                <Badge bg="secondary">C#</Badge>
                                <Badge bg="secondary">Unity Hub</Badge>
                            </div>
                            <ul >
                                <li>Created a par 5 hole, where a player is able to use keyboard input to play golf.</li>
                                <li>Implemented moving elements using C#, where some platforms and terrain move ot increase the difficulty.</li>
                                <li>Used collision and physics to create a realistic golf experience by using colliders, triggers, and rigidbody</li>
                            </ul>
                            <Card.Footer className="bottom-footer">July 2024</Card.Footer>
                        </CardBody>
                    </Card>
                    <Card className="ProjCard" >
                        <CardBody>
                            <Link to="https://github.com/MINHCheng/Live-Prefix-Tree" style={{ textDecoration: 'none', color: '#4D5359' }}>
                                <h1>Dictionary Tree</h1>
                            </Link>
                            <div className="badge">
                                <Badge bg="secondary">C++</Badge>
                            </div>
                            <ul >
                                <li>Created a dictionary using a Trie structure, which is able to find a word given a prefix</li>
                                <li>Performed extensive testing and optimization on the Trie implementation to ensure accuracy and efficiency.</li>
                                <li>Implemented version control using github, and collaborated with team members to complete the website</li>
                            </ul>
                            <Card.Footer className="bottom-footer">March 2024</Card.Footer>
                        </CardBody>
                    </Card>
                    <Card className="ProjCard" >
                        <CardBody>
                            <Link to="https://github.com/uwbaddev/baddie-match" style={{ textDecoration: 'none', color: '#4D5359' }}>
                                <h1>Baddie-match</h1>
                            </Link>
                            <div className="badge">
                                <Badge bg="secondary">React</Badge>
                                <Badge bg="secondary">HTML</Badge>
                                <Badge bg="secondary">CSS</Badge>
                                <Badge bg="secondary">JavaScript</Badge>
                            </div>
                            <ul className="PersonalWebsite">
                                <li>Asychronously retrieved player names, through the team's database</li>
                                <li>Used React Bootstrap to organize and format the page to make it visualy appealing</li>
                                <li>Implemented version control using github, and collaborated with team members to complete the website</li>
                            </ul>
                            <Card.Footer className="bottom-footer">December 2023</Card.Footer>
                        </CardBody>
                    </Card>
                    <Card className="ProjCard">
                        <CardBody>
                            <h1 style={{color:'#4D5359'}}>Minesweeper</h1>
                            <div className="badge">
                                <Badge bg="secondary">C++</Badge>
                            </div>
                            <ul className="PersonalWebsite">
                                <li>Generation of random numbers to place mines in different
                                    positions on the game board.</li>
                                <li>Handling game loops for continuous gameplay until a win
                                    or loss condition is met.</li>
                                <li>Developing algorithms for revealing cells, flagging mines,
                                    and determining the game's win or loss conditions.</li>
                            </ul>
                            <Card.Footer className="bottom-footer">December 2022</Card.Footer>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default Project;
