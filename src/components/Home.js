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
        const shootingStar = document.querySelectorAll('.shooting');
        const laptop = document.querySelectorAll('.laptop');
        const circ = document.querySelectorAll('.bubble');

        const t1 = gsap.timeline();

        t1.from(summary, {
            x: 500,
            duration: 2,
            stagger: 0.5,
            opacity: 0,
            delay: 3,
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
                yoyo: true,

            })

        // Create and adjust the motion path interactively
        gsap.to(spaceShuttle, {
            duration: 2,
            opacity: 1,
            color: '#f5f5f5',
            motionPath: {
                path: [
                    { x: 300, y: -100 },    // Start off-screen to the right
                    { x: 600, y: -100 },   // Move up and right
                    { x: 1100, y: 150 }   // End just above the words in the middle
                ],
                end: .75,
                curviness: 1.25,
                autoRotate: true
            },
            delay: 1,
            ease: "power1.inOut",
        });
        gsap.from(shootingStar, {
            duration: 1,
            opacity: 0,
            x: -500,
            y: 100,
            ease: 'power1.inOut',
            stagger: 0.5,

        });
        gsap.from(laptop, {
            duration: 3,
            opacity: 0,
            delay: 2,
            ease: 'power1.inOut'
        });



    }, []);

    return (
        <>
            <div className="Homepage">
                <Container className="">
                    {/* Space shuttle icon */}
                    {/* <i className="fa-solid fa-rocket fa-rotate-90 fa-2xl" style={{ opacity: '0' }}></i> */}
                    <div className="summary-laptop">
                        <div className="Summary big">
                            HELLO WORLD!
                        </div>
                        <b>
                            <div className="Summary big">
                                I'M <span className="letters">M</span><span className="letters">I</span><span className="letters">N</span><span className="letters">H,</span>
                            </div>
                        </b>
                        <div className="Summary small">a third year <span style={{ color: '#17BEBB' }}>computer engineering</span> student</div>
                        <div className="Summary small">at the University of <span style={{ color: '#17BEBB' }}>Waterloo.</span></div>
                        <i class="fa-solid fa-laptop-code laptop" ></i>
                    </div>

                    {/* Star icon */}

                    <i className="fa-solid fa-splotch shooting star3"></i>
                    <i className="fa-solid fa-splotch shooting star4"></i>
                    <i className="fa-solid fa-splotch shooting star5"></i>

                </Container>
                <i className="fa-solid fa-splotch star1"></i>
                <i className="fa-solid fa-splotch star2"></i>
            </div>
            {/* <div className="Homepage bottom-div">
                <div className="bubble"></div>
            </div> */}
        </>
    )
}

export default Home;
