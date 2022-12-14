import {LatLngExpression, LatLngLiteral} from 'leaflet';
import {ITransport} from './ITransport';
import {IHousing} from './IHousing';

export interface ITravel {
    pos: LatLngExpression;
    town: string;
    housing: IHousing[]
    transports: ITransport[]
    images: string[]
    id: number;
}