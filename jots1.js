import express from "express";
const app = express();

const port = process.env.port || 8080;

// Create your endpoints/route handlers
app.get('/', (req, res) => {
    res.send(<h1>Hello World from express</h1>)
});

app.listen(port, () => console.log(`App listening on localhost ${port}`));