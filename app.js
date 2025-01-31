import express from "express";
import connection from "./config/database.js";
import router from "./routes/route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(port, () => console.log(`server is running at port ${port}`));
