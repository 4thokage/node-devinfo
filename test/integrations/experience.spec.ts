import {PlatformTest} from "@tsed/common";
import {TestMongooseContext} from "@tsed/testing-mongoose";
import {expect} from "chai";
import * as SuperTest from "supertest";
import {Server} from "../../src/Server";


describe("Experience", () => {
    let request: SuperTest.SuperTest<SuperTest.Test>;
    // bootstrap your expressApplication in first
    before(TestMongooseContext.bootstrap(Server));
    before(() => {
        request = SuperTest(PlatformTest.callback());
    });
    after(TestMongooseContext.reset);

    // then run your test
    describe("GET /rest/experience", () => {
        it("should return entire experience", async () => {
            const response = await request.get("/rest/experience").expect(200);

            expect(response.body).to.be.an("array");
        });
    });


});
