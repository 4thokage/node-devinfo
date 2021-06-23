import {Property, Required} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class Experience {
    @ObjectID("id")
    _id: string;

    @Required()
    name: string;

    @Property()
    companyOrProjectURL: string;

    @Property()
    startDate: string;

    @Property()
    endDate: string;

    @Property()
    responsibilities: string[];
}
