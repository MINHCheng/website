import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";


const Home = () => {
    return (
        <div className="Homepage">
            <div className="Bigger-Container">
                <Container className="Homepage firstContainer">
                    <h1 className="Summary">Hello, I'm Minh.</h1>
                    <h1 className="Summary">I'm a Computer Engineering Student</h1>
                    <div className="Summary AboutMe">I am a second year at the University of Waterloo.</div>
                    <div className="Summary AboutMe">I have experience in front end, back-end, databases, and game development.</div>
                </Container>
            </div>
            <div className="Skills">
                <Container className="Skills Content">
                    <Row xs={1} md={2} lg={3} className="g-3">
                        <Col key="idx" className="Card">
                            <Card style={{ width: '20rem', height:'32rem' }}>
                                <Card.Img variant="top" src="./images/logo512.png" />
                                <Card.Body>
                                    <Card.Title>Front End</Card.Title>
                                    <Card.Text>
                                        Adept at using React, Javascript, and HTML and CSS.
                                        I have experience through multiple projects which can be seen in project tab.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key="idx"className="Card">
                            <Card style={{ width: '20rem', height:'32rem'}}>
                                <Card.Img variant="top" src="./images/Mysql_logo.png" style={{height: '318.18px'}}/>
                                <Card.Body>
                                    <Card.Title>Back End</Card.Title>
                                    <Card.Text>
                                        I took a course in MySQL and Java. I utilized this practice in the badminton varsity app
                                        where I handled databases and utilized RestAPI. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key="idx"className="Card">
                            <Card style={{ width: '20rem', height:'32rem' }}>
                                <Card.Img variant="top" src="./images/python.png" />
                                <Card.Body>
                                    <Card.Title>Systems Programming</Card.Title>
                                    <Card.Text>
                                    I have experience in other languages such as JavaFX and Java through term work,
                                    python, and C++ through ECE 150
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key="idx"className="Card">
                            <Card style={{ width: '20rem', height:'32rem' }}>
                                <Card.Img variant="top" src="./images/Microsoft.png" />
                                <Card.Body>
                                    <Card.Title>Other Software</Card.Title>
                                    <Card.Text>
                                    I have extensive experience with Microsoft 
                                    products, including PowerPoint, Excel, and other applications.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}
export default Home;