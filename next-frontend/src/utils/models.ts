import { DirectionsResponseData } from "@googlemaps/google-maps-services-js";

export type DirectionsData = DirectionsResponseData & {request: any}

export type RouteModel = {
    id: string;
    name: string;
    source: { name: string; location: {lat: number; lgn: number}};
    destination: { name: string; location: {lat: number; lgn: number}}
    distance: number;
    duration: number;
    directions: DirectionsResponseData & {request: any}
    created_at: Date;
    updated_at: Date;
}