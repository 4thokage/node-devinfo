import {Property, Required} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class Portfolio {
  @ObjectID("id")
  _id: string;

  @Required()
  name: string;

  @Property()
  description: string;

  @Property()
  imageURL: string;

  @Property()
  gitURL: string;

}
