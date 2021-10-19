import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { slug, title, short_description, image } = props.blog;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="service-body">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {short_description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-center">
                            <Link to={`single-blog/${slug}`}>
                                <Button variant="outline-info" className="fs-6 fw-bolder">Read More</Button>
                            </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div >
    );
};

export default Blog;