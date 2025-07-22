"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Country = require("../Models/CountrySchema");
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost:27017/SuccessiveDB");
const countries = ['Brazil', 'Germany', 'Argentina', 'France', 'Italy', 'Spain', 'England', 'Netherlands', 'Portugal', 'Uruguay'];
class Seeding {
    async seedData() {
        const countryDocs = countries.map(name => ({ countryName: name }));
        console.log(countryDocs);
        await Country.deleteMany();
        await Country.insertMany(countryDocs);
    }
    catch(err) {
        console.error('Seeding error:', err);
    }
}
const seeding = new Seeding();
seeding.seedData().then(() => console.log("DONE"));
