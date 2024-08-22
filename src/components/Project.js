import React, { useEffect, useRef } from "react";
import { Container, Badge, Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    const firstCardRef = useRef(null);
    const secondCardRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const updatePath = () => {
            if (firstCardRef.current && secondCardRef.current && svgRef.current) {
                const firstCard = firstCardRef.current.getBoundingClientRect();
                const secondCard = secondCardRef.current.getBoundingClientRect();

                // Get left and middle Y positions of the cards
                const startX = firstCard.left; // Start from the left of the first card
                const startY = firstCard.top + firstCard.height / 2; // Middle Y of the first card
                const endX = secondCard.left; // End at the left of the second card
                const endY = secondCard.top + secondCard.height / 2; // Middle Y of the second card

                // Define a curved path with a more exaggerated control point
                const controlPointX = (startX - endX) ; // Control point X
                const controlPointY = startY ; // Control point Y, make this larger for more curve

                const path = `M ${startX} ${startY} Q ${controlPointX} ${controlPointY}, ${endX} ${endY}`;

                // Update SVG path
                svgRef.current.setAttribute('d', path);
            }
        };

        // Update path on mount and on window resize
        updatePath();
        window.addEventListener('resize', updatePath);

        return () => {
            window.removeEventListener('resize', updatePath);
        };
    }, []);


    return (
        <div className="">
            <Container className="Projects">
                <Card className="ProjCard" ref={firstCardRef}>
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
                <Card className="ProjCard" ref={secondCardRef}>
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
                <svg width="100%" height="100vh" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <path
                        className="line"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        ref={svgRef}
                    />
                </svg>
            </Container>
        </div>
    );
}

export default Project;
