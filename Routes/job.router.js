
const express = require("express")
const {job,getjob} = require("../Controller/job.controller")

const app = express.Router();
app.post("/savejob",job)
app.get("/getjob",getjob)
module.exports = app