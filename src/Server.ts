import {PlatformAcceptMimesMiddleware, PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import "@tsed/mongoose";
import "@tsed/platform-express";
import "@tsed/swagger";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as cors from "cors";

@Configuration({
    rootDir: __dirname,
    acceptMimes: ["application/json"],
    port: process.env.PORT || 50100,
    httpsPort: false,
    passport: {},
    mongoose: {
        url: process.env.DB_URL || "mongodb://127.0.0.1:27017/devinfoDB",
        connectionOptions: {
            autoIndex: true
        }
    },
    swagger: [{
        path: "/docs",
        specVersion: "3.0.1"
    }],
    debug: false
})
export class Server {
    @Inject()
    app: PlatformApplication;

    $beforeRoutesInit(): void | Promise<any> {
        this.app
            .use(PlatformAcceptMimesMiddleware)
            .use(cors())
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));

        return null;
    }
}
