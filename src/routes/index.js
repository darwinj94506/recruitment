const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware,
     ErrorMiddleware } = require("../middlewares");
module.exports = function({
    UserRoutes, ContactRoutes
    }){
    const router = express.Router();
    const apiRoutes = express.Router();
    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());
    apiRoutes.use("/contacts", ContactRoutes);
    apiRoutes.use("/users", UserRoutes);
    router.use("/v1/api", apiRoutes);
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router


} 