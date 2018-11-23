"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const express = require("express");
const path_1 = require("path");
app_1.default.use(bodyParser.json());
app_1.default.use(express.static(path_1.join(__dirname, "/public")));
// setup error handlers for uncaught rejections and errors
process.on("uncaughtException", error => console.error(`Uncaught exception... ${error.stack}`));
process.on("unhandledRejection", error => {
    console.error(`Uncaught rejection... ${error.stack}`);
    process.exit(1);
});
const port = process.env.PORT || 3000;
app_1.default.listen(port, (error) => (error ? console.error(error.message) : console.info(`Server is listening on port ${port}`)));
//# sourceMappingURL=index.js.map