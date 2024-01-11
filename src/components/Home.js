import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";


const Home = () => {
    return (
        <div className="Homepage">
            <div className="Bigger-Container">
                <Container className="Homepage firstContainer">
                    <h1 className="Summary">Hello, I'm Minh.</h1>
                    <h1 className="Summary">I'm a Computer Engineer</h1>
                    <div className="Summary AboutMe">I am a second year at the University of Waterloo, with experience in front end developing.</div>
                    <div className="Summary AboutMe">I value a balanced life of learning, exercising, and traveling.</div>
                </Container>
            </div>
            <div className="Skills">
                <Container className="Skills Content">
                    <Row xs={1} md={2} lg={3} className="g-3">
                        <Col key="idx" className="Card">
                            <Card style={{ width: '15rem', height:'28rem' }}>
                                <Card.Img variant="top" src="./images/logo512.png" />
                                <Card.Body>
                                    <Card.Title>Front End</Card.Title>
                                    <Card.Text>
                                        Adept at using React, Javascript, and HTML and CSS.
                                        I have created a multitude of applications using this language.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key="idx"className="Card">
                            <Card style={{ width: '15rem', height:'28rem'}}>
                                <Card.Img variant="top" src="./images/mysql.jpg" />
                                <Card.Body>
                                    <Card.Title>Back End</Card.Title>
                                    <Card.Text>
                                        Adept at using Javascript and I took a course 
                                        on Java, Python, and C++ through Waterloo. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key="idx"className="Card">
                            <Card style={{ width: '15rem', height:'28rem' }}>
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