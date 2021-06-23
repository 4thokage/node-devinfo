import {Controller, Get} from "@tsed/common";
import {Summary, Status} from "@tsed/schema";
import {Experience} from "../models/Experience";
import {ExperienceService} from "../service/ExperienceService";

@Controller({
  path: "/experience",
})
export class ExperienceController {
  constructor(private experienceService: ExperienceService) {

  }
  /**
   *
   * @returns {Promise<Experience[]>}
   */
  @Get("/")
  @Summary("Return every developer experience")
  @Status(200, {description: "Success", type: Experience, collectionType: Array})
  async getAllExperience(): Promise<Experience[]> {
    return this.experienceService.query();
  }
}
