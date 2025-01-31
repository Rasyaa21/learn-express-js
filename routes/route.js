import express from "express"; 
import response from "../response.js";
const router = express.Router();

router.get("/test", (req, res) => {
    response(200, null, "hallo ini test api", res);
});

export default router;