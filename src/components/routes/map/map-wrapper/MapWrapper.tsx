import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import Markers from "../../../../utils/leaflet/Markers";
import {IMarker} from "../../../../utils/interface/IMarker";
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { selectDisplay } from '../../../../store/features/display/displaySlice'
import Polylines from "../../../../utils/leaflet/Polylines";
import IPolyline from "../../../../utils/interface/IPolyline";
import {selectTravel} from '../../../../store/features/travel/travelSlice';
import {ITravel} from '../../../../utils/interface/travel/ITravel';


const extractDateFromTransport = (travel: ITravel) => {
    let output = ""
    travel.transports.map((value, index, array) => {
        output = output + "from " + value.from + " to " + value.to + ((index < array.length - 1)?" or ":"")
    })
    return output
}

const estimate = (travel: ITravel) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < travel.transports.length; i++) {
        if(min > travel.transports[i].price)
            min = travel.transports[i].price
    }


    let totalCost = (min !== Number.MAX_SAFE_INTEGER)?min:0

    min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < travel.housing.length; i++) {
        if(min > travel.housing[i].total)
            min = travel.housing[i].total
    }
    totalCost += ((min !== Number.MAX_SAFE_INTEGER)?min:0)/3
    return Math.floor(totalCost)
}

const MapWrapper = (
    {center, zoom} :
        {center: LatLngExpression, zoom: number}) => {

    const display = useAppSelector(selectDisplay);

    const travels = useAppSelector(selectTravel);

    const dispatch = useAppDispatch();

    const [markers, setMarkers] = useState<IMarker[]>([]);
    const [polylines, setPolylines] = useState<IPolyline[]>([]);

    useEffect(() => {
        let n_markers: IMarker[] = travels.map(
            (travel, i) => {
                return {
                    pos: travel.pos,
                    color: "#ff0000",
                    id: travel.id,
                    popupText: travel.town,
                    description: extractDateFromTransport(travel) + "\n" + "Estimation: " + estimate(travel) + "€ (No food)"
                }
            }
        );

        setMarkers(n_markers);
    }, [display]);


    return (
        <MapContainer
            center={center}
            style={{ height: "100%", width: "100%" }}
            zoom={zoom}
            maxZoom={18}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />

            <Markers markers={markers}/>
            <Polylines polylines={polylines}/>

        </MapContainer>
    )
}
export default MapWrapper