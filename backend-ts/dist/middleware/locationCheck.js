"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationCheck = void 0;
let locations = [{ Latitude: 40.7128, Longitude: -74.0060 },
    { Latitude: 35.6895, Longitude: 139.6917 },
    { Latitude: -33.8688, Longitude: 151.2093 },
    { Latitude: -33.9249, Longitude: 18.4241 },
    { Latitude: 48.8566, Longitude: 2.3522 }
];
function containsObject({ array, trialObject }) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(trialObject));
}
class LocationCheck {
    constructor() {
        this.locationCheck = (req, res, next) => {
            const Latitude = Number(req.query.Latitude);
            const Longitude = Number(req.query.Longitude);
            const obj = { "Latitude": Latitude, "Longitude": Longitude };
            const result = containsObject({ array: locations, trialObject: obj });
            if (result) {
                res.locals.status = 200;
                res.locals.message = "location is correct";
                return next();
            }
            return res.status(400).send("Wrong location");
        };
    }
}
exports.locationCheck = new LocationCheck;
