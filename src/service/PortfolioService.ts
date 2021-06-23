import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Portfolio} from "../models/Portfolio";


@Service()
export class PortfolioService {
    @Inject(Portfolio)
    private Portfolio: MongooseModel<Portfolio>;

    /**
     *
     * @returns {Portfolio[]}
     */
    async query(options = {}): Promise<Portfolio[]> {
        return this.Portfolio.find(options).exec();
    }

}
