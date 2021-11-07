import * as faker from "faker";
import { cities } from "./cityList";

export const dummyData = () => {

    // Create an empty array and populate 100 elements.
    let dummyArr = new Array(100).fill(0);
    return dummyArr.map((el: any) => {
        return {
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            date:  faker.date.soon().toISOString(),
            dateString: faker.date.soon(5).toDateString(),
            location: cities[Math.floor(Math.random() * cities.length)],
        };
    });
};