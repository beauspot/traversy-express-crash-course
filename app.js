import express from "express";
import res from "express/lib/response.js";
import path, { parse } from "path";
import router from "./routes/api/members.js";
import { ExpressHandlebars } from "express-handlebars";
import logger from "./middlewares/logger.js";
import members from "./members.js";
import exphbs from "express-handlebars";

const port = process.env.port || 8080;
const __dirname = path.resolve();
const app = express();

// init the middleware
//app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// init middleware bodyParser
app.use(express.json());

// handling form submissions 
app.use(express.urlencoded({extended: false}));

// rendering home page route
app.get("/", (req, res) => res.render('index', {
    title: "Member App",
    members
}))

// serving static files with express
app.use(express.static(path.join(__dirname, "public"))); 

// members API routes
app.use("/api/members", router);

// listen on Port
app.listen(port, () => console.log(`App listening on localhost:${port}...`));
