import React from "react";
import { Container, Button } from "react-bootstrap";


const Resume = () => {
    // const handleDownload = () => {
    //     const externalLink = 'https://drive.google.com/file/d/1gCPK-aV-lvxpj9Sy0qXA7f7JZmgco4qa/view?usp=sharing';
    // }
    return (
        <div className="Resume">
            <Container className="ResumeContainer">
                <div>
                    To download my resume please click the button below.
                </div>
                <a
                    href="https://drive.google.com/file/d/12N3nP6Dm6j1XKSQTP64ecX8j7Br18baN/view?usp=sharing"
                    className="btn btn-primary" role="button" target="_blank"
                >
                    Resume
                </a>
            </Container>
        </div>
    )
}
export default Resume;