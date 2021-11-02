import express from "express";
import path from "path";

import members from "./members.js";
import logger from "./middlewares/logger.js";

const port = process.env.port || 8080;
const __dirname = path.resolve();
const app = express();



// initialise the middleware
//app.use(logger);

// route gets all members
app.get("/api/members", (req, res) => res.json(members));
// serving static files with express
app.use(express.static(path.join(__dirname, "public")));

// listen on Port
app.listen(port, () => console.log(`App listening on localhost:${port}...`));
