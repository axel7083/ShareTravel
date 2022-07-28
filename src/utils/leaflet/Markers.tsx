import {Marker, Popup} from 'react-leaflet';
import markerIcon from "./MarkerIcon";
import {IMarker} from "../interface/IMarker";
import {Button, Container, Row, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

// This component is used to render all the Markers in the map
const Markers = ({ markers }: {markers: IMarker[]}): JSX.Element => {

    const navigate = useNavigate();

    return (
        <>
            {markers.map((marker, index) => {
                return <Marker
                    key={index}
                    icon={markerIcon(marker.color)}
                    position={marker.pos}
                    draggable={false}>
                    {
                        marker.popupText?(
                            <Popup>
                                <Container>
                                    <Row>
                                        <Col>
                                            <h3>{marker.popupText}</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button onClick={() => {
                                                navigate(`/travel/${marker.id}`);
                                            }}>See details</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Popup>
                        ):<></>
                    }
                </Marker>
            })}
        </>
    )
}

export default Markers;

