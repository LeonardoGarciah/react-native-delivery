import httpClient from "./axiosClient";

export const apiMapsGetDeliveryRoute = (coordinates: [[number, number], number[]]) => {
    return httpClient.get(`/route/v1/driving/${coordinates.join(";")}?overview=full&geometries=polyline6&steps=true`);
}
