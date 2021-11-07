import * as faker from "faker";
import { cities } from "./cityList";

export const dummyData = () => {

    // Create an empty array and populate 100 elements.
    let dummyArr = new Array(100).fill(0);
    return dummyArr.map((el: any) => {
        return {
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            location: cities[Math.floor(Math.random() * cities.length)],
            schedule: faker.date.between("2021-11-06", "2021-11-17"),
        };
    });
};