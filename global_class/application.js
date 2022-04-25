process.env.TZ = "Asia/Ho_Chi_Minh";
import Express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

export const express = Express();
dotenv.config();

//Express setting
express.set("views", path.join(path.resolve(), "views"));
express.set("view engine", "ejs");
express.disable("x-powered-by");
express.set("trust proxy", 1);
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({ extended: true }));

express.get("/", (req, res) => {
    res.send({ message: "Welcome to integration system" });
});

express.get("/module-control", (req, res) => {
    res.render("module-control/index");
});

// express.use("/api/my-coin", true);

class Application {
    useController(controllerPath) {
        return import(controllerPath).then((module) => {
            Promise.resolve(module);
        });
    }

    start() {
        return express.listen(process.env.PORT, () => {
            console.log(`The Application is running on port ${process.env.PORT}`);
        });
    }
}
export default new Application();
