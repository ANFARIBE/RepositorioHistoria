const express = require ("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HistoriaRouter = require("./routers/HistoriaRouters");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Historia
app.use("/historia", HistoriaRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT);