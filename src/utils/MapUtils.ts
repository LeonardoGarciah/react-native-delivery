
const mapUtils = {
    convertMetersToKilometers(meters: number) {
        return meters / 1000;
    },

    waypointMapFormatter(waypoints: []) {
        return waypoints.map((waypoint) => {
            return { latitude: waypoint[1], longitude: waypoint[0] }
        })
    }
}

export default mapUtils;