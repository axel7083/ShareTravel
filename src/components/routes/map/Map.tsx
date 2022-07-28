import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import MapWrapper from "./map-wrapper/MapWrapper";
import {LatLngExpression} from 'leaflet';

const rowStyle: React.CSSProperties = {
    marginRight: 0,
    marginLeft: 0,
    height: "100vh"
}

const colStyle: React.CSSProperties = {
    paddingLeft: 0,
    paddingRight: 0
}

// The map will be center on this position when started
const center: LatLngExpression = [45.758049, 4.7649183];

/**
 * The Map component is simply a page, separate in two section
 * on the left, the map, on the right a panel
 */
const Map = () => {

    return (
        <Row style={rowStyle}>
            <Col style={colStyle}>
                <MapWrapper zoom={5} center={center}/>
            </Col>
        </Row>
    )
}

export default React.memo(Map);