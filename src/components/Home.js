import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {

    useEffect(() => {
        const summary = document.querySelectorAll('.Summary');
        const letters = document.querySelectorAll('.letters');
        const spaceShuttle = document.querySelector('.fa-rocket');

        const t1 = gsap.timeline();

        t1.from(summary, {
            x: 500,
            duration: 2,
            stagger: 0.5,
            opacity: 0
        })
            .to(letters, {
                color: '#17BEBB', // Target color
                duration: 2, // Duration for each color change
                stagger: {
                    amount: 0.5, // Stagger time for each letter
                    from: "start" // Start from the beginning
                },
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true
            });

        // Create and adjust the motion path interactively
        gsap.to(spaceShuttle, {
            duration: 5,
            opacity: 1,
            color: '#f5f5f5',
            motionPath: {
                path: [
                    { x: 500, y: 0 },        // Start off the right side of the screen
                    { x: -150, y: -200 },    // Move up and to the left
                    { x: -50, y: -250 }      // End just above the words in the middle
                ],
                end: .75,
                curviness: 1.25,
                autoRotate: true
            },
            ease: "power1.inOut",
        });

    }, []);

    return (
        <>
            <div className="Homepage">
                <Container className="Homepage">
                    {/* Space shuttle icon */}
                    <i className="fa-solid fa-rocket fa-rotate-270 fa-2xl" style={{ opacity: '0' }}></i>

                    <div className="Summary big">
                        HELLO WORLD!
                    </div>
                    <b>
                        <div className="Summary big">
                            I'M <span className="letters">M</span><span className="letters">I</span><span className="letters">N</span><span className="letters">H,</span>
                        </div>
                    </b>
                    <div className="Summary small">a second year <span style={{color:'#17BEBB'}}>computer engineering</span> student</div>
                    <div className="Summary small">at the University of <span style={{color:'#17BEBB'}}>Waterloo.</span></div>

                    {/* Star icon */}
                    <i className="fa-solid fa-splotch star1"></i>
                    <div className="bubble"></div>
                    <i className="fa-solid fa-splotch star2"></i>
                    <i class="fa-solid fa-laptop-code"></i>
                </Container>
            </div>

            <div className="Skills">
                <Container className="Skills Content">
                    <Row xs={1} md={2} lg={3} className="g-3">
                        {/* Add your Card components here */}
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Home;
