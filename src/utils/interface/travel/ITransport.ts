import {LatLngExpression, LatLngLiteral} from 'leaflet';

export interface ITransport {
    price: number;
    from: string;
    to: string,
    link: string,
    image: string,
}