const express = require("express");
const router = express.Router();


const JobController = require("../controllers/job.controller");

router.post('/enter', JobController.enterJob );

router.get("/getAll", JobController.getAll);

router.get("/getOne/:id", JobController.getOne);

router.put("/update/:id", JobController.updateEnterJob);

router.delete("delete/:id", JobController.deleteEnterJob);

module.exports = router
