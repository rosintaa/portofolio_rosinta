const express = require("express");
const router = express.Router();
const modelSinta = require("../model/sintamodel");

router.get("/", (req,res)=>{
  modelSinta.getHome(res);
})






module.exports = router;
