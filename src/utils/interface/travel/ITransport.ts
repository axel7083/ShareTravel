import {LatLngExpression, LatLngLiteral} from 'leaflet';

export interface ITransport {
    price: number;
    from: LatLngExpression;
    to: LatLngExpression
}