import {LatLngExpression, LatLngLiteral} from 'leaflet';

export interface IHousing {
    pos?: LatLngExpression;
    pricePerNight: number;
    from: string;
    to: string
    image: string
    total: number
    url: string
}