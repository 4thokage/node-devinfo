import {Controller, Get} from "@tsed/common";
import {Summary, Status} from "@tsed/schema";
import {PortfolioService} from "../service/PortfolioService";
import {Portfolio} from "../models/Portfolio";


@Controller({
  path: "/portfolio",
})
export class PortfolioController {
  constructor(private portfolioService: PortfolioService) {

  }
  /**
   *
   * @returns {Promise<Experience[]>}
   */
  @Get("/")
  @Summary("Return every developer experience")
  @Status(200, {description: "Success", type: Portfolio, collectionType: Array})
  async getPortfolio(): Promise<Portfolio[]> {
    return this.portfolioService.query();
  }
}
