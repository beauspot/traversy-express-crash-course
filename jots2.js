import express from "express";
import path from "path";

const port = process.env.port || 8080;
const __dirname = path.resolve();
const app = express();

// serving static files with express
app.use(express.static(path.join(__dirname, "public")));

// listen on Port
app.listen(port, () => console.log(`App listening on localhost:${port}...`));
