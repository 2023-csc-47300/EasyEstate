import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css';
import backgroundImage from '../images/1.png';

const HomePage = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        category: '',
        minPrice: '',
        maxPrice: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSearch = (event) => {
        event.preventDefault();
        // Implement search logic here
        console.log(searchParams);
    };

    return (
        <section className="search section" aria-label="search">
            <Container>

                <div className="search-bg">
                    <div className="search-content">
                        <h1 className="h1 search-title" style={{ color: 'white' }}>
                            DISCOVER YOUR DREAM HOME IN <span className="nyc"> NYC </span> WITH US!
                        </h1>
                    </div>
                </div>

                <div className="search-form-wrapper">
                    <div className="form-tab">
                        <Button className="tab-btn" data-tab-btn>Buy</Button>
                        {/*<Button className="tab-btn" data-tab-btn>Sell</Button>*/}
                        <Button className="tab-btn" data-tab-btn>Rent</Button>
                    </div>

                    <Form className="search-form">
                        <Form.Group className="mb-3" controlId="search">
                            <Form.Label>Search:</Form.Label>
                            <Form.Control
                                type="search"
                                name="search"
                                placeholder="Location"
                                required
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="category">Select Categories:</Form.Label>
                            <Form.Select id="category" name="category" onChange={handleInputChange}>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="offices">Room</option>
                                <option value="townhome">Townhome</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="min-price">
                            <Form.Label>Min Price:</Form.Label>
                            <Form.Select name="minPrice" onChange={handleInputChange}>
                                <option value="">Min Price</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option>
                                <option value="6000">6000</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="max-price">
                            <Form.Label>Max Price:</Form.Label>
                            <Form.Select name="maxPrice" onChange={handleInputChange}>
                                <option value="">Max Price</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option>
                                <option value="6000">6000</option>
                            </Form.Select>
                        </Form.Group>

                        <Button type="submit" className="btn btn-primary">Search</Button>

                    </Form>
                </div>

            </Container>
        </section>
    );
};


export default HomePage;
