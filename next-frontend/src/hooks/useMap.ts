import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";
import { getCurrentPosition } from "../utils/geolocation";
import { Map } from "../utils/map";

export function useMap(containerRef: React.RefObject<HTMLDivElement | null>){
    const [map, setMap] = useState<Map>();

    useEffect(() => {
        (async () => {
            const loader = new Loader ({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                libraries: ["routes", "geometry", "marker"],
            });
            
            const [, , , position] = await Promise.all([
                loader.importLibrary("routes"),
                loader.importLibrary("geometry"),
                loader.importLibrary("marker"),
                getCurrentPosition({ enableHighAccuracy: true }),
            ]);

            const map = new Map(containerRef.current!, {
                mapId: "2e0a97af9386fef",
                zoom: 15,
                center: position,
                streetViewControl: false, // Exibe o ícone do Street View
                mapTypeControl: false, // Exibe o botão de mudar para Satélite/Relevo
                fullscreenControl: true, // Exibe o botão de tela cheia
                zoomControl: true, // Exibe os botões de zoom (+ e -)
            });
            setMap(map);
        })();
    }, [containerRef]);

    return map;
}