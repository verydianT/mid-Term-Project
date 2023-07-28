const router = require('express').Router();
const vidioContr = require('../controller/vidioContrll');

// get all vidio
router.get("/vidios", vidioContr.findAll);
// add vidio
router.post("/addVidio", vidioContr.addVidio);

module.exports = router;