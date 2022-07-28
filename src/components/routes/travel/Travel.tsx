import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../../store/hooks';
import {selectTravelById} from '../../../store/features/display/displaySlice';
import {ITravel} from '../../../utils/interface/travel/ITravel';
import {Container, Button, Card} from 'react-bootstrap';

const Travel = () => {
    const { id } = useParams();
    const travel = useAppSelector(state => selectTravelById(state, Number(id))) as ITravel;

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{travel.town}</h2>
                </Col>
            </Row>
            <Row>
                {travel.images.map((image, i) => {
                    return (
                        <img
                            key={i}
                            src={image}
                            style={{ maxWidth: '30rem', maxHeight: '12rem', objectFit: 'cover' }}
                        />
                    )
                })}
            </Row>
            <br />
            <Row>
                <h3>Housing</h3>
            </Row>
            <Row>
                {travel.housing.map((housing, i) => {
                    return (
                        <Card key={i}>
                            <Card.Img variant="top" style={{maxHeight: '24rem', objectFit: 'cover'}} src={housing.image} />
                            <Card.Body>
                                <Card.Text>
                                    From {housing.from} to {housing.to}<br />
                                    Price per night {housing.pricePerNight}<br />
                                    Total price with cleaning {housing.total}<br />
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" onClick={() => window.open(housing.url, '_blank')}>See in Airbnb</Button>
                        </Card>
                    )
                })}
            </Row>
            <br />
            <Row>
                <h3>Transport</h3>
            </Row>
            <Row>
                {travel.transports.map((transport, i) => {
                    return (
                        <Card key={i}>
                            <Card.Img variant="top" src={transport.image} />
                            <Card.Body>
                                <Card.Text>
                                    From {transport.from} to {transport.to}<br />
                                    Price {transport.price}<br />
                                    image: {transport.image}<br />
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" onClick={() => window.open(transport.link, '_blank')}>See in kayak</Button>
                        </Card>
                    )
                })}
            </Row>

        </Container>
    )
}

export default Travel;