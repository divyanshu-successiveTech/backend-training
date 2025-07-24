import { NextFunction ,Response,Request} from "express"

let locations=[{Latitude: 40.7128,Longitude: -74.0060},
    {Latitude: 35.6895,Longitude: 139.6917},
    {Latitude: -33.8688,Longitude: 151.2093},
    {Latitude: -33.9249,Longitude: 18.4241},
    {Latitude: 48.8566,Longitude: 2.3522}
]
interface functionParameters{
    array: { Latitude: number; Longitude: number }[];
  trialObject: { Latitude: number; Longitude: number };
}
function containsObject({array, trialObject}:functionParameters):boolean {
        return array.some(item => JSON.stringify(item) === JSON.stringify(trialObject));
    }

export const locationCheck=(req:Request,res:Response,next:NextFunction)=>{
    const Latitude = Number(req.query.Latitude);
    const Longitude = Number(req.query.Longitude);
    const obj={"Latitude": Latitude,"Longitude": Longitude};

    

    const result = containsObject({array:locations,trialObject:obj});

    if(result){
        res.locals.status=200;
        res.locals.message="location is correct";
        
        return next();
    }

    return res.status(400).send("Wrong location");
    

} 