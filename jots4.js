import express from "express";
import res from "express/lib/response.js";
import path, { parse } from "path";
import router from "./routes/api/members.js";

import logger from "./middlewares/logger.js";
import members from "./members.js";

const port = process.env.port || 8080;
const __dirname = path.resolve();
const app = express();

// init the middleware
app.use(logger);

// init middleware bodyParser
app.use(express.json());

// handling form submissions 
app.use(express.urlencoded({extended: false}));

// serving static files with express
app.use(express.static(path.join(__dirname, "public")));

// members API routes
app.use("/api/members", router);

// listen on Port
app.listen(port, () => console.log(`App listening on localhost:${port}...`));
