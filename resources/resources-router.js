const express = require("express");
const resourceModel = require("./resources-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const resources = await resourceModel.getResources()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newResource = await resourceModel.addResource(req.body)
        res.json(newResource)
    } catch (err) {
        next(err)
    }
})


module.exports = router;