const Country = require("../Models/CountrySchema");
import mongoose from "mongoose";
import { SeedingInterface } from "../Interfaces/SeedingInterface";

mongoose.connect("mongodb://localhost:27017/SuccessiveDB");



const countries = ['Brazil', 'Germany','Argentina','France','Italy','Spain','England', 'Netherlands','Portugal','Uruguay'];

class Seeding implements SeedingInterface{

    async seedData(){
        const countryDocs = countries.map(name => ({ countryName:name }));
        await Country.deleteMany()
        await Country.insertMany(countryDocs);

    }
    catch (err:Error) {
        console.error('Seeding error:', err);
    }


}

const seeding = new Seeding();

seeding.seedData().then(()=>console.log("DONE"));