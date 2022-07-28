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
                    id: i,
                    popupText: travel.town,
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