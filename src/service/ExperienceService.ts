import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Experience} from "../models/Experience";


@Service()
export class ExperienceService {
    @Inject(Experience)
    private Experience: MongooseModel<Experience>;

    /**
     *
     * @returns {Experience[]}
     */
    async query(options = {}): Promise<Experience[]> {
        return this.Experience.find(options).exec();
    }

}
